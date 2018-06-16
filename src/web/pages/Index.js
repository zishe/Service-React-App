import React, { Fragment } from 'react'
// import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'
import routes from '../config/routes'
import { Header } from '../components/Header';
import { CssBaseline } from '@material-ui/core';
// import NotFound from './NotFound'

class Index extends React.Component {
  render() {
    // Wrapping with provider gives children access to stores
    return (
      <Provider {...this.props}>
        <Fragment>
          <CssBaseline />
          <Header />
          <Switch>
            {routes.map((route, i) => {
              return <Route key={i} exact path={route.path} component={route.component}/>
            })}
            {/* <Route component={NotFound}/> */}
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}

// Index.propTypes = {
//   store: PropTypes.object.isRequired,
//   state: PropTypes.object.isRequired,
// }

export default Index
