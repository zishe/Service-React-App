import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  IconButton
} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ExtCardMedia = styled(CardMedia)`
  && {
    height: 200px;
    cursor: pointer;
  }
`;

const Container = styled.div`
  && {
    margin-right: 10px;
    align-items: left;
    text-align: left;
  }
`;

const ProductCard = styled(Card)`
  && {
    display: inline-block;
    margin: 0 0 10px 10px;
    width: calc(100% - 10px);
  }
  @media (min-width: 500px) {
    && {
      margin: 0 0 10px 10px;
      width: calc(50% - 10px);
    }
  }
  @media (min-width: 800px) {
    && {
      margin: 0 0 12px 12px;
      width: calc(33% - 10px);
    }
  }
  @media (min-width: 1280px) {
    && {
      margin: 0 0 14px 14px;
      width: calc(25% - 14px);
    }
  }
  @media (min-width: 1680px) {
    && {
      margin: 0 0 14px 14px;
      width: calc(20% - 14px);
    }
  }
`;

const ProductContent = styled(CardContent)`
  && {
    text-align: left;
    position: relative;
  }
`;

const AddButton = styled(IconButton)`
  && {
    float: right;
  }
`;

const ProductWeight = styled.div`
  && {
    position: absolute;
    right: 25px;
    top: 20px;
  }
`;

const StyledAddShoppingCartIcon = styled(AddShoppingCartIcon)`
  && {
    color: #0288d1;
  }
`;

@inject('store')
// @inject('uiStore')
@observer
class ProductList extends Component {
  inCart = product => {
    // console.log(this.props.store.shoppingCartStore.products);

    const count = this.props.store.shoppingCartStore.products
      ?.map(obj => obj.product)
      ?.filter(item => item.id === product?.id)?.length;
    if (count > 0) {
      return `${count} в Конзине`;
    }
  };

  handleClick = product => {
    const { store: { routerStore, productStore } } = this.props;
    // productStore.lastProduct = product;
    routerStore.goTo('product', { id: product.id });
  };

  render() {
    const { products } = this.props;

    return (
      <Container>
        {products.map(product => (
          // <Link key={product.name} to={`/product/${product.id}`}>
          <ProductCard key={product.name}>
            <ExtCardMedia
              image={product.image}
              title={product.name}
              onClick={() => {
                this.handleClick(product);
              }}
            />
            <ProductContent>
              <Typography
                gutterBottom
                variant="headline"
                component="h3"
                style={{ paddingBottom: 10, fontSize: 21 }}
              >
                {product.name}
              </Typography>
              <ProductWeight>
                <Typography variant="subheading" component="span" style={{ fontSize: 16 }}>
                  {product.servingWeight} гр.
                </Typography>
              </ProductWeight>
              <Typography component="p">{product.description}</Typography>
            </ProductContent>
            <CardActions disableActionSpacing style={{ flexDirection: 'row-reverse' }}>
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
              <AddButton
                aria-label="Добавить в корзину"
                align="left"
                onClick={e => {
                  this.props.store.shoppingCartStore.addProduct(product);
                  e.preventDefault();
                }}
              >
                <StyledAddShoppingCartIcon
                  color="primary"
                  // style={{ fontSize: 48 }}
                />
              </AddButton>
              <Typography variant="body1" gutterBottom align="left" style={{ paddingRight: 20 }}>
                {this.inCart(product)}
              </Typography>
            </CardActions>
          </ProductCard>
        ))}
      </Container>
    );
  }
}

export default ProductList;
