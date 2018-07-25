import React, { Fragment, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Dialog, Button, DialogTitle, DialogContentText, DialogContent, withMobileDialog, DialogActions, List, ListItem, Avatar, ListItemText, Typography } from '@material-ui/core';
import styled from 'styled-components';
import TimeInput from 'material-ui-time-picker';

const Container = styled.div`
  && {
    height: 80px;
    width: 80px;
    border-radius: 0;
    padding: 20px;
  }
`;

const Note = styled.div`
  && {

  }
`;

const DateTime = styled.div`
  && {
  }
`;

const ShoppingList = styled(List)`
  && {
  }
`;

const ShoppingListd = styled(List)`
  && {
  }
`;


@inject('uiStore')
@inject('store')
@observer
export default class ShoppingCartOptions extends Component {
  static propTypes = {

  }

  handleChangeTime = (time) => {
    console.log(time);

  }

  render() {
    const { store } = this.props;

    return (
      <Container>
        <DateTime>
          <TimeInput
            mode='12h'
            onChange={(time) => this.handleChangeTime(time)}
          />
        </DateTime>
        <Note>
        </Note>
      </Container>
    )
  }
}
