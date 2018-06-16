import React          from 'react';
import { render }     from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';

// import createBrowserHistory from 'history/createBrowserHistory';
// import { Provider } from 'mobx-react';
// import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
// import { Router } from 'react-router';

import { RootStore } from './stores/RootStore';
import routes from './config/routes';
import Index  from './pages/Index';

const rootElement = document.getElementById('root');
const rootStore = new RootStore();

const App = () => (
  <BrowserRouter>
    <Provider store={rootStore}>
      <Index {...RootStore}>
        {routes}
      </Index>
    </Provider>
  </BrowserRouter>
);

const HotApp = hot(module)(App)

render(
  <HotApp />,
  rootElement
);
