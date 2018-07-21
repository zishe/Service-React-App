import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Card, CardContent, Typography, CardMedia, CardActions, IconButton } from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import Edit from '@material-ui/icons/Edit';
  import AddCircle from '@material-ui/icons/AddCircle';

const Container = styled.div`
  && {
    text-align: center;
    align-items: center;
    display: 'flex';
    flex-wrap: 'wrap';
    justify-content: 'space-around';
    overflow: 'hidden';
    /* background-color: #eee; */
  }
`;

const ExtCardMedia = styled(CardMedia)`
  && {
    height: 200px;
  }
`;

const ProductCard = styled(Card)`
  && {
    width: calc(33% - 30px);
    float: left;
    display: block;
    margin: 15px;
  }
`
const ProductsTitle = styled(Typography)`
  && {
    text-align: center;
    font-size: 2rem;
    margin: 20px auto 10px;
  }
`

const AddButton = styled(IconButton)`
  && {
    float: right;
  }
`

@inject('store')
@inject('uiStore')
@observer
export default class Products extends Component {
  UNSAFE_componentWillMount () {
    this.props.store.productStore.fetchAll()
  }

  inCart = (product) => {
    console.log('how many products?');
    console.log(this.props.store.shoppingCartStore.products);

    console.log(this.props.store.shoppingCartStore.products.map(obj => obj.product));

    const count = this.props.store.shoppingCartStore.products
                      ?.map(obj => obj.product)
                      ?.filter(item => item.id === product?.id)
                      ?.length;
    if (count > 0) {
      return `${count} в Конзине`;
    }
  }

  render() {
    const { products, modifyingProduct } = this.props.store.productStore;

    return (
      <Container>
        <ProductsTitle variant="headline" gutterBottom>
          Популярное
        </ProductsTitle>
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
                This impressive paella is a perfect party dish and a fun meal to cook together with
                your guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableActionSpacing style={{flexDirection: 'row-reverse'}}>
              {/* <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton> */}
              <AddButton aria-label="Изменить и добавить" align="left">
                <Edit
                  color="primary"
                  style={{ fontSize: 48 }}
                  onClick={() => {
                    console.log('fdss');
                    this.props.uiStore.productModificationOpen = true;
                    this.props.store.productStore.setModifyingProduct(product.id);
                  }}
                />
              </AddButton>
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

      </Container>
    )
  }
}
