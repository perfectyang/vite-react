import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'
import {asyncUpdateInfoList, delInfo} from '../../store/action/about'
import Count from './Count'
export class Home extends Component {
  ref = createRef()
  updateInfoList = () => {
    this.props.updateInfoList({
      id: Math.random(),
      name: this.ref.current.value
    })
    this.ref.current.value = ''
  }
  delInfo = () => {
    this.props.delInfo(this.ref.current.value)
  }
  render() {
    return (
      <div>
      home --- {this.props.About.info.length}
      <Count />
      <input ref={this.ref} />
      <button onClick={this.updateInfoList}>add</button>
      <button onClick={this.delInfo}>del</button>
      </div>
    )
  }
}


const mapDispatchToProps = {
  updateInfoList: asyncUpdateInfoList,
  delInfo
}

export default connect(state => ({
  Home: state.Home,
  About: state.About
}), mapDispatchToProps)(Home)
