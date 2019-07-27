import React, { useState, useEffect, useReducer, useContext } from 'react';
import Rootcomponent from '../Rootcomponent'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'

export default React.memo(withRouter(
    (props) => {
        // const [data, setData] = useState([])
        // const { state, dispatch } = useContext(StoreContext);
        return (
            <div>
                // 四个内容
                <div>
                    <h3>系统概况</h3>
                    <hr />
                    <div>a</div>
                </div>
                <div>
                    <h3>网络概况</h3>
                    <hr />
                    <div>b</div>
                </div>
                <div>
                    <h3>存储概况</h3>
                    <hr />
                    <div>c</div>
                </div>
                <div>
                    <h3>系统监控</h3>
                    <hr />
                    <div>d</div>
                </div>
            </div>
        )
    }
))
