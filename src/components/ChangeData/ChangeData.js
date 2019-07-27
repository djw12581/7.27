import React, { useState, useEffect, useReducer, useContext } from 'react';
import Rootcomponent from '../Rootcomponent'
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'

export default React.memo(withRouter(
    (props) => {
        const { state, dispatch } = useContext(Rootcomponent.store);
        const [data, setData] = useState({
            username: '',
            password: '', // 旧密码
            newpassword: '',// 新密码
            checkpwd: '', // 确认新密码
            time: null,
            str: []
        })
        // toggle Alert
        useEffect(() => {
            // Update the document title using the browser API
            document.title = `You ${data.password} times`;
            document.querySelector('.alert').innerHTML = `${data.str} `
        }, [data.str]);
        // clear timer
        useEffect(() => {
            clearTimeout(data.time);
        }, []);

        const handleCheck = () => {
            console.log('state', data, state)
            // 旧密码错误提示密码错误
            if (state.pwd[0] !== data.password) {
                console.log('密码错误')
                setData({
                    ...data,
                    str: ['密码错误']
                })
            } else if (data.checkpwd !== data.newpassword) {
                // 如果新密码和确认新密码不一致 提示新旧密码不一致
                console.log('新旧密码不一致', data)
                setData({
                    ...data,
                    str: ['两次输入密码不一致，请确认']
                })
            } else if (false) {
                // // 密码必须同时包含大小英文字母和数字，且长度至少8位
                console.log('密码必须同时包含大小英文字母和数字，且长度至少8位', data)
                setData({
                    ...data,
                    str: ['密码必须同时包含大小英文字母和数字，且长度至少8位']
                })
            } else if (data.checkpwd === data.newpassword) {
                // 如果密码都有效 提示修改成功 三秒后自动跳转到登录页
                console.log('修改成功', data)
                setData({
                    ...data,
                    str: ['修改成功']
                })
                dispatch({
                    type: 'ChangePwd',
                    payload: [...state.pwd, data.checkpwd]
                })
                console.log('assda', state)
                data.time = setTimeout(() => {
                    props.history.push('/')
                }, 3000);
            }
        }
        return (
            <div>

                <fieldset>
                    <legend>修改密码</legend>
                    <label htmlFor="userName">账号：</label>
                    <input type="text" name="" id="userName" value={state.account} disabled />
                    <label htmlFor="old">旧密码：</label>
                    <input type="password" name="" id="old" onChange={(event) => {
                        setData({
                            ...data,
                            password: event.target.value
                        })
                    }} />
                    <label htmlFor="new">新密码：</label>
                    <input type="password" name="" id="new" onChange={(event) => {
                        setData({
                            ...data,
                            newpassword: event.target.value
                        })
                    }} />
                    <label htmlFor="checknew">确认新密码：</label>
                    <input type="password" name="" id="checknew" onChange={(event) => {
                        setData({
                            ...data,
                            checkpwd: event.target.value
                        })
                    }} />
                    <button onClick={handleCheck}>登录</button>
                </fieldset>
                {/* 提示部分 */}
                <div>
                    <p className="alert"
                    // style={{ display: data.o ? "block" : "none" }}
                    ></p>
                </div>

                {/* <TS></TS> */}
            </div>
        )
    }
))
