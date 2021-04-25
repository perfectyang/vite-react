import React from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from "react-redux"
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less'

const NormalLoginForm = (props) => {
  const onFinish = (values) => {
    console.log('获取', values);
    props.goLogin(1)
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '账号' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '密码' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item style={{textAlign: 'center'}}>
        <Button style={{width: '50%'}} type="primary" htmlType="submit" className="login-form-button">登录</Button>
      </Form.Item>
    </Form>
  )
}
function Login (props) {
  if (props.login.isLogin) {
    return <Redirect to="/home" />
  } else {
    return (
      <div className="login-pages">
        <div className="login-pages__content">
          <h1 className="h-title">EZ-Talk</h1>
          <NormalLoginForm {...props} />
        </div>
      </div>
    )
  }
}

export default connect(_ => ({}), dispatch => ({
  goLogin: val => dispatch({type: 'update', payload: {isLogin: val}})
}))(Login)
