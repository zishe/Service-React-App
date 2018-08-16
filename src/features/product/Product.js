import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.div`
  && {
    text-align: center;
    align-items: center;
  }
`

const ProductTitle = styled(Typography)`
  && {
    text-align: center;
    font-size: 2rem;
    margin: 20px auto 10px;
  }
`

@inject('store')
@observer
export default class Product extends Component {
  componentDidMount () {
    this.props.store.productStore.fetchById(this.props.id);
  }

  loadProduct = (id) => {
    const { productStore } = this.props.store;
    productStore.fetchById(id);
  }

  render() {
    const { lastProduct } = this.props.store.productStore;
    console.log(this.props);

    return (
      <Container>
        <ProductTitle variant="headline" gutterBottom>
          {lastProduct.name}
        </ProductTitle>
      </Container>
    )
  }
}
