import React from 'react';
import { Link } from 'react-router-dom';

export default class ClientRouter extends React.Component {
  render () {
    return (
      <ul>
        <li><Link to="/">Splash</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    )
  }
}
