import React, { Component } from 'react'
import { Row, Col, Button } from 'antd'

class Signin extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <div>
        <Row>
          <Col span={2} offset={22}>
            退出
            <Button type='primary'>
              111
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Signin
