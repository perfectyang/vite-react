import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import './index.css'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

import React, { Component } from 'react'

class LayoutComponent extends Component {
  NavList = [
    {
      title: 'Home',
      link: '/admin/home',
      key: 'home'
    },
    {
      title: 'About',
      link: '/admin/about',
      key: 'about'
    }
  ]
  goPath = (path) => {
    return () => {
      console.log('this.', this.props)
      this.props.history.push(path)
    }
  }
  // loginOut = () => {
  //   this.props.loginOut(0)
  // }
  render() {
    return (
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          {
            this.NavList.map(nav => (<Menu.Item onClick={this.goPath(nav.link)} key={nav.title}>{nav.title}</Menu.Item>))
          }
          <Menu.Item onClick={_ => this.props.loginOut(0)} >loginOut</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
    )
  }
}

export default connect(state => ({}), dispatch => ({
  loginOut: bool => (dispatch({type: 'deleteInfo', payload: {isLogin: bool}}))
}))(LayoutComponent)