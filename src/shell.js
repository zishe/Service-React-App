import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
// import {
//   HomePage,
//   Product,
//   NotFoundPage,
// } from 'features';
import ProductPage from './features/product/Product';
import HomePage from './features/home/Home';
import NotFoundPage from './features/NotFound';

const viewMap = {
  product: <ProductPage />,
  home: <HomePage />,
  notFound: <NotFoundPage />
};

@inject('store')
export default class Shell extends React.Component {
  render() {
    const { store: { routerStore } } = this.props;

    return (
      <div>
        <RouterView routerStore={routerStore} viewMap={viewMap} />
      </div>
    );
  }
}
