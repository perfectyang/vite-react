import React, { Component } from 'react'
import { connect } from 'react-redux'
import {delInfo} from '../../store/action/about'
export class About extends Component {
  curDelInfo = (id) => {
    return _ => this.props.delInfo(id)
  }
  render() {
    return (
      <ul>
        {
          this.props.info.map(el => {
            return (
              <li key={el.id} onClick={this.curDelInfo(el.id)}>{el.name}---{el.id}</li>
            )
          })
        }
      </ul>
    )
  }
}

const mapDispatchToProps = {
  delInfo
}

export default connect((state) => ({
 info: state.About.info
}), mapDispatchToProps)(About)
