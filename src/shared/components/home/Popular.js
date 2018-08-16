import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import ProductList from './ProductList'

const Container = styled.div`
  && {
    text-align: center;
    align-items: center;
  }
`

const ProductsTitle = styled(Typography)`
  && {
    text-align: center;
    font-size: 2rem;
    margin: 20px auto 10px;
  }
`

@inject('store')
@observer
export default class Products extends Component {
  UNSAFE_componentWillMount () {
    this.props.store.productStore.fetchAll()
  }

  render() {
    const { products } = this.props.store.productStore;

    return (
      <Container>
        <ProductsTitle variant="headline" gutterBottom>
          Популярное
        </ProductsTitle>
        <ProductList products={products} />
      </Container>
    )
  }
}
