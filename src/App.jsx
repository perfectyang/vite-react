import React from 'react'
import ViewRouter from './router'
import {withRouter} from 'react-router-dom'
// import { connect } from 'react-redux'
function App(props) {
  return (
    <ViewRouter {...props} />
  )
}
export default withRouter(App)
// export default connect(state => ({
//   loginInfo: state.Login
// }), dispatch => ({
//   goLogin: bool => (dispatch({type: 'update', payload: {isLogin: bool}})),
//   loginOut: bool => (dispatch({type: 'deleteInfo', payload: {isLogin: bool}})),
// }))()
