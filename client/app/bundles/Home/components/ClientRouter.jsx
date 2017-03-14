import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import Navigation from "./Navigation"
import Splash from "./Splash"
import Blog from "./Blog"

const store = configureStore();

class ClientRouter extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/main">
          <div>
            <Navigation />
            <Route exact path="/" component={Splash} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default ClientRouter
