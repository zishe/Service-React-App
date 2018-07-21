import React, { Fragment, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Dialog, Button, DialogTitle, DialogContentText, DialogContent, withMobileDialog, DialogActions, List, ListItem, Avatar, ListItemText, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
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


@inject('uiStore')
@inject('store')
@observer
export default class ShoppingCartOptions extends Component {
  static propTypes = {

  }

  render() {
    const { store } = this.props;

    return (
      <Container>

      </Container>
    )
  }
}
