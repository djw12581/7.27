import React, { useState, useEffect, useReducer, useContext } from 'react';
import Rootcomponent from '../Rootcomponent'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'

export default React.memo(withRouter(
    (props) => {
        const { state, dispatch } = useContext(Rootcomponent.store);
        const { show } = state
        const s = {
            display: show ? "block" : "none"
        }

        return (
            <div>
                {
                    <div style={s}>
                        <p>{props.str}</p>
                        <button onClick={() => {
                            dispatch({
                                type: 'CLICK',
                                payload: !show
                            })
                            props.history.push('/change')
                        }}>确定</button>
                        <button onClick={() => {
                            dispatch({
                                type: 'CLICK',
                                payload: !show
                            })
                        }}>取消</button>
                    </div>
                }
            </div>
        )
    }
))

