import React from 'react'
import ViewRouter from './router'
import {withRouter} from 'react-router-dom'
function App(props) {
  return (
    <ViewRouter {...props} />
  )
}
export default withRouter(App)

