import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Home from '../../shared/components/Home';
import {
  // RouterLink,
  RouterState
} from 'mobx-state-router';

@inject('store')
@observer
class HomePageBase extends Component {
  render() {
    const { store: { routerStore } } = this.props;

    return (
      <Home>
        {/*
          Temrory issue, should work
        <RouterLink routeName="newTask">
          Заказать услугу
        </RouterLink>
        <RouterLink routeName="findTask">
          Стать исполнителем
        </RouterLink> */}
        <Home.Link toState={new RouterState('newTask')} routerStore={routerStore}>
          <Home.Button variant="contained" size="large" color="primary">
            Заказать услугу
          </Home.Button>
        </Home.Link>

        <Home.Link toState={new RouterState('findTask')} routerStore={routerStore}>
          <Home.Button variant="contained" size="large" color="secondary">
            Стать исполнителем
          </Home.Button>
        </Home.Link>
      </Home>
    );
  }
}


export const HomePage = HomePageBase;
