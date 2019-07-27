// import React, { useState, useEffect, useReducer, useContext } from 'react';
// import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
// import Redux from './reduce/index'
// // import Init from './components/Init'
// // import Router from './router'

// export default React.memo((props) => (
//   <div>
//     <ContextProvider />
//   </div>
// ))

// // root component
// const StoreContext = React.createContext(null);
// const ContextProvider = () => {
//   const [state, dispatch] = useReducer(Redux.rootReducer, Redux.rootState);
//   return (
//     <StoreContext.Provider value={{ state, dispatch }}>
//       <BrowserRouter>
//         <Router />
//       </BrowserRouter>
//     </StoreContext.Provider>
//   );
// };
// // routers
// const Router = withRouter(() => {
//   return (
//     <div>
//       <header>
//         <Link to="/">a</Link>
//         <Link to="/b">b</Link>
//         <Link to="/home">c</Link>
//       </header>
//       <main>
//         <Switch>
//           <Route exact path='/' component={Init} />
//           <Route path='/change' component={ChangeData} />
//           <Route path='/home' component={Home} />
//         </Switch>
//       </main>
//     </div>
//   )
// })
// // A 组件，登陆表单
// const Init = React.memo((props) => {
//   // 获取全局数据
//   const { state, dispatch } = useContext(StoreContext);
//   // 组件自身状态
//   const [data, setData] = useState({
//     username: '',
//     password: '',
//     visible1: false,
//     visible2: false,
//   })


//   const handleClick = () => {
//     // 全局状态解构
//     const { account, pwd, show, show2 } = state
//     // 组件状态解构
//     const { username, password } = data
//     // 
//     // console.log('click data', data, username, password, account, pwd)
//     if ((username === account) && (password === pwd[1])) {
//       props.history.push('/home')
//     } else if ((username === account) && (password === pwd[0])) {
//       console.log('不允许使用初始密码登陆，是否立即修改密码')
//       // 修改提示弹窗
//       dispatch({
//         type: 'CLICK',
//         show: !show
//       })
//     } else {
//       console.log('错误的账号或密码')
//       // 错误提示弹窗
//       dispatch({
//         type: 'CLICK2',
//         show: !show2
//       })
//     }
//   }

//   return (
//     <div>
//       {/* <form action=""> */}
//       <fieldset>
//         <legend>简约而不简单</legend>
//         <label htmlFor="userName">账号：</label>
//         <input type="text" name="" id="userName" onChange={(event) => {
//           setData({
//             ...data,
//             username: event.target.value
//           })
//           console.log('修改后data', data)
//         }} />
//         <label htmlFor="pwd">密码：</label>
//         <input type="password" name="" id="pwd" onChange={(event) => {
//           setData({
//             ...data,
//             password: event.target.value
//           })
//         }} />
//         <button onClick={handleClick}>登录</button>
//       </fieldset>
//       {/* </form> */}

//       <Alert target={state.show} index={0}
//       // callback={
//       //   () => props.history.push('/change')
//       // } 
//       />
//       <Alert />
//       <Alert2 /> 
//     </div>
//   )
// })

// const Alert = withRouter((props) => {
//   const { state, dispatch } = useContext(StoreContext);
//   const { show, show2, str } = state
//   const s = {
//     display: show ? "block" : "none"
//   }

//   return (
//     <div>
//       {
//         <div style={s}>
//           <p>{str[0]}</p>
//           <button onClick={() => props.history.push('/change')}>确定</button>
//           <button onClick={() => {
//             dispatch({
//               type: 'CLICK',
//               payload: !show
//             })
//           }}>取消</button>
//         </div>
//       }
//     </div>
//   )
// })
// // A 的子组件
// const Alert2 = withRouter((props) => {
//   const { state, dispatch } = useContext(StoreContext);
//   const { show, show2, str } = state
//   const s = {
//     display: show2 ? "block" : "none"
//   }

//   return (
//     <div>
//       {
//         <div style={s}>
//           <p>{str[1]}</p>
//           <button onClick={() => {
//             dispatch({
//               type: 'CLICK2',
//               payload: !show2
//             })
//           }}>取消</button>
//         </div>
//       }
//     </div>
//   )
// })
// // 修改密码组件
// const ChangeData = () => {
//   // 获取全局数据
//   const { state, dispatch } = useContext(StoreContext);
//   // 组件自身状态
//   const [data, setData] = useState({
//     username: '',
//     password: ''
//   })
//   const handleCheck = () => {

//   }
//   return (
//     <div>
//       {
//         <fieldset>
//           <legend>修改密码</legend>
//           <label htmlFor="userName">账号：</label>
//           <input type="text" name="" id="userName" value={state.username} onChange={(event) => dispatch({
//             type: '',
//             payload: event.target.value
//           })} />
//           <label htmlFor="old">旧密码：</label>
//           <input type="password" name="" id="old" onChange={(event) => dispatch({
//             type: '',
//             payload: event.target.value
//           })} />
//           <label htmlFor="new">新密码：</label>
//           <input type="password" name="" id="new" onChange={(event) => dispatch({
//             type: '',
//             payload: event.target.value
//           })} />
//           <button onClick={handleCheck}>登录</button>
//         </fieldset>
//       }
//     </div>
//   )
// }
// // 主页组件
// const Home = () => {
//   return (
//     <div>
//       <header>
//         <Link to="/">个人信息</Link>
//         <Link to="/b">系统信息</Link>

//       </header>
//       {/* <main>
//         <Switch>
//           <Route exact path='/person' component={} />
//           <Route path='/change' component={} />

//         </Switch>
//       </main> */}
//     </div>
//   )
// }

import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Route, Link, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import Redux from './reduce/index'
// import Init from './components/Init'
// import Router from './router'

export default React.memo((props) => (
  <div>
    <BrowserRouter>
      <ContextProvider />
    </BrowserRouter>
  </div>
))

// root component
const StoreContext = React.createContext(null);
const ContextProvider = () => {
  const [state, dispatch] = useReducer(Redux.rootReducer, Redux.rootState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <Router />
    </StoreContext.Provider>
  );
};
// routers
const Router = withRouter(() => {
  return (
    <div>
      <header>
        <Link to="/">a</Link>
        <Link to="/b">b</Link>
        <Link to="/home">c</Link>
      </header>
      <main>
        <Switch>
          <Route exact path='/' component={Init} />
          <Route path='/change' component={ChangeData} />
          <Route path='/home' component={Home} />
        </Switch>
      </main>
    </div>
  )
})
// A 组件，登陆表单
const Init = React.memo((props) => {
  // 获取全局数据
  const { state, dispatch } = useContext(StoreContext);
  // 组件自身状态
  const [data, setData] = useState({
    username: '',
    password: ''
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

      <Alert />
      <Alert2 />
    </div>
  )
})
// A 的子组件
const Alert = withRouter((props) => {
  const { state, dispatch } = useContext(StoreContext);
  const { show, show2, str } = state
  const s = {
    display: show ? "block" : "none"
  }

  return (
    <div>
      {
        <div style={s}>
          <p>{str[0]}</p>
          <button onClick={() => {
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
})
// A 的子组件
const Alert2 = withRouter((props) => {
  const { state, dispatch } = useContext(StoreContext);
  const { show, show2, str } = state
  const s = {
    display: show2 ? "block" : "none"
  }

  return (
    <div>
      {
        <div style={s}>
          <p>{str[1]}</p>
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
})
// 修改密码组件
const ChangeData = () => {
  const { state, dispatch } = useContext(StoreContext);
  console.log('aa', state)

  const handleCheck = () => {

  }
  return (
    <div>
      {
        <fieldset>
          <legend>修改密码</legend>
          <label htmlFor="userName">账号：</label>
          <input type="text" name="" id="userName" value={state.account} disabled />
          <label htmlFor="old">旧密码：</label>
          <input type="password" name="" id="old" onChange={(event) => dispatch({
            type: '',
            payload: event.target.value
          })} />
          <label htmlFor="new">新密码：</label>
          <input type="password" name="" id="new" onChange={(event) => dispatch({
            type: '',
            payload: event.target.value
          })} />
          <button onClick={handleCheck}>登录</button>
        </fieldset>
      }
    </div>
  )
}
// 主页组件
const Home = () => {
  return (
    <div>
      <header>
        <Link to="/">个人信息</Link>
        <Link to="/b">系统信息</Link>

      </header>
      {/* <main>
        <Switch>
          <Route exact path='/person' component={} />
          <Route path='/change' component={} />
          
        </Switch>
      </main> */}
    </div>
  )
}