import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Card, CardContent, Typography, CardMedia } from '@material-ui/core';

const ExtCardMedia = styled(CardMedia)`
  height: 200px;
`;

const Container = styled.div`
  height: 400px;
`;

@inject('store')
@observer
export default class Categories extends Component {
  render() {
    const { categories } = this.props.store.categoryStore;

    return (
      <Container>
        {categories.map((x) =>
          <Card key={x.name}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {x.name}
              </Typography>
            </CardContent>
            <ExtCardMedia
              image={x.image}
              title={x.name}
            />
          </Card>
        )}
      </Container>
    )
  }
}
