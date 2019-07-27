import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import Redux from '../reduce/index'
import Login from './Login/Login'
import ChangeData from './ChangeData/ChangeData'
import Home from './Home/Home'

// 全局数据容器
const StoreContext = React.createContext(null);
const ContextProvider = React.memo(withRouter(
    () => {
        const [state, dispatch] = useReducer(Redux.rootReducer, Redux.rootState);

        return (
            <StoreContext.Provider value={{ state, dispatch }}>
                <Route exact path='/' component={Login} />
                <Route path='/change' component={ChangeData} />
                <Route path='/home' component={Home} />
            </StoreContext.Provider>
        )
    }
))

export default {
    store: StoreContext,
    root: ContextProvider
}