import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import Rootcomponent from './components/Rootcomponent'

// routers
export default React.memo(withRouter(
    () => {
        return (
            <div>
                <header>
                    <Link to="/">a</Link>
                    <Link to="/b">b</Link>
                    <Link to="/home">c</Link>
                </header>
                <main>
                    <Switch>
                        <Route path='/' component={Rootcomponent.root} />
                    </Switch>
                </main>
            </div>
        )
    }
))