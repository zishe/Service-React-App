import React from 'react';
import { observer, inject } from 'mobx-react';
import Categories from './Home/Categories';
import Products from './Home/Popular';
import ProductModification from './Modification/ProductModification';
import { isNullOrUndefined } from 'util';
import styled from 'styled-components';

const Container = styled.div`
  && input, select {
    font-family: 'Roboto';
  }
`;

@inject('store')
@observer
export class Home extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Container>
        <Categories />
        <Products />
        {!isNullOrUndefined(store.productStore.modifyingProduct) &&
          <ProductModification product={store.productStore.modifyingProduct} />}
      </Container>
    )
  }
}
