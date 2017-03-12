import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Navigation from "./Navigation"
import Splash from "./Splash"
import Blog from "./Blog"

class ClientRouter extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/main">
        <div>
          <Navigation />
          <Route exact path="/" component={Splash} />
          <Route exact path="/blog" component={Blog} />
        </div>
      </BrowserRouter>
    )
  }
}

export default ClientRouter
