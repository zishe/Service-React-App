import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const Container = styled.div`
  display: 'flex';
  flex-wrap: 'wrap';
  justify-content: 'space-around';
  overflow: 'hidden';
  background-color: #eee;
  /* padding-bottom: 40px; */
`;

const CategoryPanel = styled(GridList)`
  flex-wrap: 'nowrap';
  transform: 'translateZ(0)';
`;

const padding = 10;
const Item = styled(GridListTile)`
  && {
    width: calc(25% -15px) !important;
    height: auto !important;
  }
  padding: ${padding}px 0 ${padding}px ${padding}px !important;
  &:last-child {
    padding-right: ${padding}px !important;
  }
`;

@inject('store')
@observer
export default class Categories extends Component {
  UNSAFE_componentWillMount () {
    this.props.store.categoryStore.fetchAll()
  }

  render() {
    const { categories } = this.props.store.categoryStore;

    return (
      <Container>
        <CategoryPanel cols={4}>
          {categories.map((category) =>
            <Item key={category.id}>
              <img src={category.image} alt={category.name} />
              <GridListTileBar
                title={category.name}
                // subtitle={<span>by: {category.author}</span>}
                actionIcon={
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                }
              />
            </Item>
          )}
        </CategoryPanel>
      </Container>
    )
  }
}
