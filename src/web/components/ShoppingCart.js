import React, { Fragment, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Dialog, Button, DialogTitle, DialogContentText, DialogContent, withMobileDialog, DialogActions, List, ListItem, Avatar, ListItemText } from '@material-ui/core';
import styled from 'styled-components';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

const Container = styled.div`
  && {
    /* text-align: center;
    align-items: center;
    display: 'flex';
    flex-wrap: 'wrap';
    justify-content: 'space-around';
    overflow: 'hidden'; */
  }
`;

const CartTitle = styled(DialogTitle)`
  && {
    /* min-width: 600px; */
  }
`;

const ItemPreview = styled(Avatar)`
  && {
    height: 80px;
    width: 80px;
    border-radius: 0;
  }
`;


@inject('uiStore')
@inject('store')
@observer
export class ShoppingCart extends Component {

  handleDialogOpen = () => {
    this.props.uiStore.shoppingCartOpen = true;
  }

  handleDialogClose = () => {
    this.props.uiStore.shoppingCartOpen = false;
  }

  render() {
    const { uiStore, store, fullScreen } = this.props;

    return (
      <Container>
        {/* <Button >Open responsive dialog</Button> */}
          <Button
            color="inherit"
            style={{padding: 0, minWidth: 55}}
            onClick={this.handleDialogOpen}
          >
            <ShoppingBasket />
          </Button>
        <Dialog
          fullScreen={fullScreen}
          open={uiStore.shoppingCartOpen}
          onClose={this.handleDialogClose}
          aria-labelledby="responsive-dialog-title"
        >
          <CartTitle id="responsive-dialog-title">
            Заявка
          </CartTitle>
          <DialogContent>
          <List>
            {store.shoppingCartStore.products.map((item) => {
              return <ListItem key={item.id}>
                <ItemPreview>
                  <img src={item.image} alt={item.name} />
                </ItemPreview>
              <ListItemText primary={item.name} secondary="" />
            </ListItem>;
            })}
          </List>
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

export default withMobileDialog()(ShoppingCart);