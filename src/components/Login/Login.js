import React, { useState, useEffect, useReducer, useContext } from 'react';
import Rootcomponent from '../Rootcomponent'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import Alert from './Alert'
import Alert2 from './Alert2'


export default React.memo(withRouter(
    (props) => {
        // 获取全局数据
        const { state, dispatch } = useContext(Rootcomponent.store);
        // 组件自身状态
        const [data, setData] = useState({
            username: '',
            password: '',
            str: ['不允许使用初始密码登陆，是否立即修改密码', '错误的账号或密码']
        })

        const handleClick = () => {
            const { account, pwd, show, show2 } = state
            const { username, password } = data
            if ((username === account) && (password === pwd[1])) {
                props.history.push('/home')
            } else if ((username === account) && (password === pwd[0])) {
                console.log('不允许使用初始密码登陆，是否立即修改密码')
                dispatch({
                    type: 'CLICK',
                    payload: !show
                })
            } else {
                console.log('错误的账号或密码')
                dispatch({
                    type: 'CLICK2',
                    payload: !show2
                })
            }
        }

        return (
            <div>
                {/* <form action=""> */}
                <fieldset>
                    <legend>简约而不简单</legend>
                    <label htmlFor="userName">账号：</label>
                    <input type="text" name="" id="userName" onChange={(event) => {
                        setData({
                            ...data,
                            username: event.target.value
                        })
                    }} />
                    <label htmlFor="pwd">密码：</label>
                    <input type="password" name="" id="pwd" onChange={(event) => {
                        setData({
                            ...data,
                            password: event.target.value
                        })
                    }} />
                    <button onClick={handleClick}>登录</button>
                </fieldset>
                {/* </form> */}

                <Alert str={data.str[0]} />
                <Alert2 str={data.str[1]} />
            </div>
        )
    }
))

