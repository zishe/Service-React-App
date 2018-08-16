import React, { Component } from 'react';
import { Provider, observer } from 'mobx-react';
import { RootStore } from './shared/stores/RootStore';
import { UIStore } from './shared/stores/UIStore';
import {
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core';
import { HistoryAdapter } from 'mobx-state-router';
import { history } from './shared/utils/history';
import Shell from './shell';

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
      },
    },
  },
  typography: {
    // Tell Material-UI what the font-size on the html element is.
  },
  shape: {
    borderRadius: 2,
  }
});

const rootStore = new RootStore();
const uiStore = new UIStore();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

@observer
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={rootStore} uiStore={uiStore} >
          <Shell />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;