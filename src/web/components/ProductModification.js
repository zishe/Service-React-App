import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react';
import { Dialog, Button, DialogTitle, DialogContentText, DialogContent, withMobileDialog, DialogActions, List, ListItem, Avatar, ListItemText, FormControl, InputLabel, Input } from '@material-ui/core';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const Container = styled.div`
  && {
  }
`;
const CartTitle = styled(DialogTitle)`
  && {
    min-width: 600px;
  }
`

const ItemPreview = styled(Avatar)`
  && {
    height: 200px;
    width: 200px;
    border-radius: 0;
    float: right;
  }
`;

const WeightHelpText = styled.div`
  && {
    font-size: 14px;
  }
`;

const Ingredients = styled.div`
  && {
    /* font-size: 14px; */

  }
`;

const Ingredient = styled.div`
  && {

  }
`;

const IngredientTypes = styled.div`
  && {

  }
`;

const IngredientType = styled.div`
  && {

  }
`;

@inject('uiStore')
@inject('store')
@observer
export default class ProductModification extends Component {
  static propTypes = {
    product: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.product = this.props.store.shoppingCartStore.modifyingProduct;
  }

  handleDialogOpen = () => {
    this.props.uiStore.productModificationOpen = true;
  }

  handleDialogClose = () => {
    this.props.store.productStore.modifyingProduct = null;
    this.props.uiStore.productModificationOpen = false;
  }

  handleModifyChange = (e) => {
    this.props.store.productStore.setModifyingProductData({serving_weight: e.target.value})
  }

  render() {
    const { uiStore, store, fullScreen } = this.props;

    let product = this.props.store.productStore.modifyingProduct;
    console.log('product');
    console.log(product);

    return (product &&
      <Container>
        <Dialog
          fullScreen={fullScreen}
          open={uiStore.productModificationOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <CartTitle id="responsive-dialog-title">
            Изменить
          </CartTitle>
          <DialogContent>
            <ItemPreview>
              {product.name}
              <img src={product.image} alt={product.name} />
            </ItemPreview>

            <FormControl >
              <InputLabel htmlFor="name-simple">Вес</InputLabel>
              <Input name="name-simple" value={store.productStore.modificationData.serving_weight} onChange={this.handleModifyChange} />
              <WeightHelpText >
                Вес страндартной порции {product.serving_weight} гр.
              </WeightHelpText>
            </FormControl>

            Индгредиенты:

            <Ingredients>
              {product.ingredients.map((ingredient) => {
                return (
                  <Ingredient key={ingredient.id}>
                    {ingredient.id}
                    <IngredientTypes>
                      {ingredient.ingredientTypes && ingredient.ingredientTypes.map((x) => {
                        return (
                          <IngredientType key={x.id}>
                            {x}
                          </IngredientType>
                        )
                      })}
                    </IngredientTypes>
                  </Ingredient>
                );
              })}
            </Ingredients>

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose} color="primary">
              Вернуться
            </Button>
            <Button onClick={this.handleDialogClose} color="primary" autoFocus>
              Продолжить
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    )
  }
}
