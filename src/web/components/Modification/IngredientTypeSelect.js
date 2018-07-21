import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Select from 'react-select';
import { Typography } from '../../../../node_modules/@material-ui/core';

// const Container = styled.div`
//   && {
//   }
// `;

const IngredientType = styled.div`
  && {
    /* float: left; */
  }
`

// const Label = styled(InputLabel)`
//   && {
//     margin-right: 30px;
//     font-size: 11px;
//   }
// `;

const SelectIngredient = styled(Select)`
  && {
    min-width: 160px;
  }
`;


@inject('store')
@observer
export default class IngredientTypeSelect extends Component {
  static propTypes = {
    ingredient: PropTypes.object
  }

  handleChange = (selectedOption) => {
    console.log(selectedOption);

    // this.props.store.productStore.setModifyingProductData({ingredientType: value})
  }

  render() {
    const { ingredient } = this.props;
    return (
      <IngredientType>
        {/* <Label htmlFor="age-simple">Тип</Label> */}
        <SelectIngredient
          required="false"
          placeholder={"Тип"}
          noResultsText="Пусто"
          value={this.props.store.productStore ? this.props.store.productStore.modificationData.ingredientType : null}
          onChange={this.handleChange}
          options={ingredient.ingredientTypes.map((x) => { return {value: x.id, label: x.name } })}
        >
        </SelectIngredient>
      </IngredientType>
    );
  }
}