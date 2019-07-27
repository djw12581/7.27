import React, { useState, useEffect, useReducer, useContext } from 'react';
import Rootcomponent from '../Rootcomponent'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'

export default React.memo(withRouter(
    (props) => {
        const { state, dispatch } = useContext(Rootcomponent.store);
        const { users_data } = state
        const [{ users_peason_data }] = users_data
        console.log('asadfasdfasdf', users_peason_data)
        const lists = Object.keys(users_peason_data)
        return (
            <div>
                <fieldset>
                    <legend>I am icer man!</legend>
                    <ul>
                        {
                            lists.map((list, index) => {
                                const v = users_peason_data[list]
                                return (
                                    <li key={index}>
                                        <span>{list}:</span>
                                        <span>{v}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </fieldset>

            </div>
        )
    }
))
