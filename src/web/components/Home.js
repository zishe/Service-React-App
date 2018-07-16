import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import Categories from './Home/Categories';
import Products from './Home/Popular';
import ProductModification from './ProductModification';
import { isNullOrUndefined } from 'util';

@inject('store')
@observer
export class Home extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Fragment>
        <Categories />
        <Products />
        {!isNullOrUndefined(store.productStore.modifyingProduct) &&
          <ProductModification product={store.productStore.modifyingProduct} />}
      </Fragment>
    )
  }
}
