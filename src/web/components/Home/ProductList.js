import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import AddCircle from '@material-ui/icons/AddCircle';

const ExtCardMedia = styled(CardMedia)`
  && {
    height: 200px;
  }
`

const ProductCard = styled(Card)`
  && {
    width: calc(33% - 30px);
    float: left;
    display: block;
    margin: 15px;
  }
`

const AddButton = styled(IconButton)`
  && {
    float: right;
  }
`

@inject('store')
// @inject('uiStore')
@observer
export default class ProductList extends Component {
  inCart = (product) => {
  // console.log(this.props.store.shoppingCartStore.products);

    const count = this.props.store.shoppingCartStore
                      .products
                      ?.map(obj => obj.product)
                      ?.filter(item => item.id === product?.id)
                      ?.length;
    if (count > 0) {
      return `${count} в Конзине`;
    }
  }

  render() {
    const { products } = this.props.store.productStore

    return (
      <>
        {products.map((product) =>
          <ProductCard key={product.name}>
            <ExtCardMedia
              image={product.image}
              title={product.name}
            />
            <CardContent style={{textAlign: 'left'}}>
              <Typography gutterBottom variant="headline" component="h3" style={{paddingBottom: 10}}>
                {product.name}
              </Typography>
              <Typography component="p">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing style={{flexDirection: 'row-reverse'}}>
              {/* <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton> */}
              {/* <AddButton aria-label="Изменить и добавить" align="left">
                <Edit
                  color="primary"
                  style={{ fontSize: 48 }}
                  onClick={() => {
                    console.log('fdss');
                    this.props.uiStore.productModificationOpen = true;
                    this.props.store.productStore.setModifyingProduct(product.id);
                  }}
                />
              </AddButton> */}
              <AddButton aria-label="Добавить в корзину" align="left">
                <AddCircle
                  color="primary"
                  style={{ fontSize: 48 }}
                  onClick={() => { this.props.store.shoppingCartStore.addProduct(product) }}
                />
              </AddButton>
              <Typography variant="body1" gutterBottom align="left" style={{paddingRight: 20}}>
                {this.inCart(product)}
              </Typography>
            </CardActions>
          </ProductCard>
        )}
      </>
    );
  }
}
