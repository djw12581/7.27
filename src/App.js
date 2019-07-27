import React from 'react';
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import Router from './router'

export default React.memo((props) => (
  <div>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </div>
))