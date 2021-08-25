import React, {lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { Spin } from 'antd'
const Layout = lazy(_ => import('../component/Layout'))
const router = [
  {
    path: '/home',
    component: lazy(_ => import('../page/Home')),
    title: 'home',
    isAuth: true
  },
  {
    path: '/about',
    component: lazy(_ => import('../page/About')),
    title: 'about',
    isAuth: true
  }
]

const unAuthRouter = [
  {
    path: '/login',
    component: lazy(_ => import('../page/Login')),
    title: 'login'
  }
]

function AuthRouter (props) {
  const  {
    isAuth,
    login,
    ...otherProps
  } = props
  if (login.isLogin) {
    return <Route {...otherProps} />
  } else {
    return <Redirect to='/login' login={login} {...otherProps} />
  }
}

function ViewRouter (props) {
  return (
    <Switch>
      <Suspense fallback={<Spin /> }>
        {
          unAuthRouter.map(route => {
            return <Route key={route.title} render={_ => {
               return <route.component {...route} {...props} />
              }
            }  />
          })
        }
        <Route path="/">
          <Layout {...props}>
            {
              router.map(route => {
                return <AuthRouter key={route.title} {...route} {...props} />
              })
            }
          </Layout>
        </Route>
      </Suspense>
    </Switch>
  )
}



export default connect((state => ({
  login: state.Login
})), {
  goLogin: () => {}
})(ViewRouter)