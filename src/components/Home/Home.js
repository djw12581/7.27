import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import Rootcomponent from '../Rootcomponent'
import Person from './Person'
import System from './System'

export default React.memo(withRouter(
    () => {
        return (
            <div>
                <header>
                    <Link to="/home">个人信息</Link><br />
                    <Link to="/home/system">系统信息</Link>
                </header>
                <main>
                    <Switch>
                        <Route exact path='/home' component={Person} />
                        <Route path='/home/system' component={System} />
                    </Switch>
                </main>
            </div>
        )
    }
))

