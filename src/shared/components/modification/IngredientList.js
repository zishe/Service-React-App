import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import IngredientTypeSelect from './IngredientTypeSelect';
import Select from 'react-select';
import { Typography } from '@material-ui/core';

const Ingredients = styled.div`
  && {
    width: 650px;
  }
  * {
    font-family: 'Roboto' !important;
  }
`;

const IngredientType = styled(IngredientTypeSelect)`
  && {
    flex: 2;
    overflow: visible;
  }
`;

const Ingredient = styled.div`
  && {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 70px;
    overflow: visible;
  }
`;

const Tags = styled(Select)`
  && {
    ::before {
      display: none;
    }
    margin-left: 20px;
    flex: 4;
  }
`;

const IngredientName = styled(Typography)`
  && {
    flex: 1;
  }
`;

const Option = styled(Typography)`
  && {
  }
`;

const TypePlaceholder = styled(Typography)`
  && {
  }
`;

@inject('store')
@observer
class IngredientList extends Component {
  static propTypes = {
    product: PropTypes.object
  };

  handleChangeTags = (ingredient, tags) => {
    console.log(tags);
    this.props.store.productStore.ingredientsModification[ingredient.id] = {
      tags: tags
    };
  };

  renderOption = option => {
    return <Option>{option.label}</Option>;
  };

  renderValue = option => {
    return <TypePlaceholder>{option.label}</TypePlaceholder>;
  };

  render() {
    const { store, product } = this.props;
    console.log(this.props);

    return (
      <Ingredients>
        {product.ingredients &&
          product.ingredients.map(ingredient => {
            // const selected = Object.keys(store.productStore.ingredientsModification).indexOf(ingredient.id) >= 0
            // console.log('ingredient selected ');
            // console.log(selected);
            // console.log(ingredient.tags.map((x) => { return {value: x.id, label: x.name } }));

            return (
              <Ingredient key={ingredient.id}>
                <IngredientName>{ingredient.name}</IngredientName>
                <IngredientType ingredient={ingredient} />
                <Tags
                  value={store.productStore.ingredientsModification[ingredient.id]?.tags}
                  onChange={selectedItems => this.handleChangeTags(ingredient, selectedItems)}
                  placeholder="Другое"
                  isMulti
                  options={ingredient.tags.map(x => {
                    return { value: x.id, label: x.name };
                  })}
                  noResultsText="Пусто"
                  valueRenderer={this.renderValue}
                />
              </Ingredient>
            );
          })}
      </Ingredients>
    );
  }
}

export default IngredientList;
