import React, { Component } from 'react'
import Room from '../components/Room'
import { Button } from 'antd'

class RoomPage extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {}
  // }
  render () {
    return (
      <div>
        <Button type='primary'>
          test
        </Button>
        <Room />
      </div>
    )
  }
}

export default RoomPage
