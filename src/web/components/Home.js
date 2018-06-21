import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Categories from './Home/Categories';
import Products from './Home/Popular';

@inject('store')
@observer
export class Home extends React.Component {
  render() {
    return (
      <Fragment>
        <Categories />
        <Products />
      </Fragment>
    )
  }
}
