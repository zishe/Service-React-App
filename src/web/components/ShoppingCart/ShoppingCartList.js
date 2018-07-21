import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { List, ListItem, Avatar, ListItemText, Typography, ListItemSecondaryAction, IconButton, Icon } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/DeleteIcon';
import styled from 'styled-components';

const Modified = styled(Typography)`
  && {
    position: absolute;
    right: 0;
    top: 11px;
    font-size: 12px;
    color: #6202EE;
  }
`;

const ItemPreview = styled(Avatar)`
  && {
    height: 80px;
    width: 80px;
    border-radius: 0;
  }
`;

const ShoppingList = styled(List)`
  && {
  }
`;

const ProductWeight = styled(Typography)`
  && {
  }
`;

const ProductComposition = styled(Typography)`
  && {
  }
`;


@inject('uiStore')
@inject('store')
@observer
export default class ShoppingCartList extends Component {
  static propTypes = {

  }

  render() {
    const { store } = this.props;

    if (store.shoppingCartStore.products.length)

    return (
      <ShoppingList>
        {store.shoppingCartStore.products.map((item) => {
          const { product, modification } = item;
          console.log('modification');
          console.log(modification);

          return (
            <ListItem key={product.id}>
              <ItemPreview>
                <img src={product.image} alt={product.name} />
              </ItemPreview>
              <ProductWeight>
                {modification?.modificationData?.weight || product.servingWeight}
              </ProductWeight>
              {modification && <Modified>Изменен</Modified>}
              <ListItemText
                primary={product.name}
                secondary=""
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                  <Icon name="delete-outline" size="30" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </ShoppingList>
    )
  }
}
