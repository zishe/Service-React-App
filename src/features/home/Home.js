import React from 'react';
import { observer, inject } from 'mobx-react';
import Categories from '../../shared/components/home/Categories';
import Products from '../../shared/components/home/Popular';
import ProductModification from '../../shared/components/modification/ProductModification';
import { isNullOrUndefined } from 'util';
import styled from 'styled-components';

const Container = styled.div`
  && input, select {
    font-family: 'Roboto';
  }
  && {
    max-width: 1800px;
    margin: 0 auto;
  }
`;

@inject('store')
@observer
export default class Home extends React.Component {
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
