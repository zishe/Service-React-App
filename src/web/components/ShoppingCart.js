import React, { Fragment, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Dialog, Button, DialogTitle, DialogContentText, DialogContent, withMobileDialog, DialogActions } from '@material-ui/core';
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

@inject('uiStore')
@inject('store')
@observer
export class ShoppingCart extends Component {

  handleClickOpen = () => {
    this.props.uiStore.shoppingCartOpen = true;
  }

  handleClose = () => {
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
            onClick={this.handleClickOpen}
          >
            <ShoppingBasket />
          </Button>
        <Dialog
          fullScreen={fullScreen}
          open={uiStore.shoppingCartOpen}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Let Google help apps determine location. This means sending anonymous location data to
              Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    )
  }
}

export default withMobileDialog()(ShoppingCart);