import React, { useState, useEffect, useReducer, useContext } from 'react';
import Rootcomponent from '../Rootcomponent'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'

// A 的子组件
export default React.memo(withRouter(
    (props) => {
        const { state, dispatch } = useContext(Rootcomponent.store);
        const { show2 } = state
        const s = {
            display: show2 ? "block" : "none"
        }

        return (
            <div>
                {
                    <div style={s}>
                        <p>{props.str}</p>
                        <button onClick={() => {
                            dispatch({
                                type: 'CLICK2',
                                payload: !show2
                            })
                        }}>取消</button>
                    </div>
                }
            </div>
        )
    }
))


