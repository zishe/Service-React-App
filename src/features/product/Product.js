import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Product from '../../shared/components/product/Product';

const Container = styled.div`
  && {
    text-align: center;
    align-items: center;
  }
`;

@inject('store')
@observer
class ProductPage extends Component {
  render() {
    const { showProduct } = this.props.store.productStore;

    return (
      <Container>
        {showProduct ? (
          <Product />
        ) : (
          <div></div>
        )}
      </Container>
    );
  }
}

export default ProductPage;
