import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import IngredientTypeSelect from './IngredientTypeSelect';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';


const Ingredients = styled.div`
  && {
    width: 650px;
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
    height: 60px;
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

const IngredientName = styled.div`
  && {
    flex: 1;
  }
`;

@inject('store')
@observer
export class IngredientList extends Component {
  static propTypes = {
    product: PropTypes.object
  }

  handleChangeTags = (tags) => {
    console.log(tags);

  }

  render() {
    const { store, product } = this.props;
    console.log(this.props);

    return (
      <Ingredients>
        {product.ingredients && product.ingredients.map((ingredient) => {
          // console.log('ingredient.tags');
          // console.log(ingredient.tags.map((x) => { return {value: x.id, label: x.name } }));

          return (
            <Ingredient key={ingredient.id}>
              <IngredientName>
                {ingredient.name}
              </IngredientName>
              <IngredientType ingredient={ingredient} />
              <Tags
                value={store.productStore.modificationData.selectedTags}
                onChange={this.handleChangeTags}
                placeholder="Другое"
                isMulti
                options={ingredient.tags.map((x) => { return {value: x.id, label: x.name } })}
                noResultsText="Пусто"
              />
            </Ingredient>
          );
        })}
      </Ingredients>
    );
  }
}

export default IngredientList
