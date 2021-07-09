import React, { Component } from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom'

export default class index extends Component {
  render() {
    return (
      <div>
        <Result
          status="404"
          title="404"
          subTitle="抱歉，该网页不存在"
          extra={<Button onClick={() => setTimeout(() => { window.location.reload() }, 200)}><Link to="/login">Back Login</Link></Button>}
        />
        <a href="https://beian.miit.gov.cn" style="margin: 0 auto;">粤ICP备2021031312号-1</a>
      </div>
    )
  }
}
