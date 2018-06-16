import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Home } from '../components/Home';

@observer
export default class HomePage extends Component {
  render() {
    // const { store } = this.props;
    return (
      <Home
        // categories={store.categories}
      />
    )
  }
}
