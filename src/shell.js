import React from 'react';
import { inject } from 'mobx-react';
import { RouterView } from 'mobx-state-router';
import {
  HomePage,
  TaskPage,
  ProductPage,
  NotFoundPage,
} from './features';

const viewMap = {
  product: <ProductPage />,
  home: <HomePage />,
  task: <TaskPage />,
  notFound: <NotFoundPage />
};

@inject('store')
class Shell extends React.Component {
  render() {
    const { store: { routerStore } } = this.props;

    return (
      <div>
        <RouterView routerStore={routerStore} viewMap={viewMap} />
      </div>
    );
  }
}

export default Shell;