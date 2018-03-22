import React, { Component } from 'react'
import Signin from '../components/Signin'
import { Button } from 'antd'
// import Button from 'antd/lib/button';
// import '../../node_modules/antd/dist/antd.css'
import './signin.css'

class SigninPage extends Component {
  // constructor (props) {
  //   super(props)
  // }
  render () {
    return (
      <div className='App'>
        <Button type='primary'>
          test
        </Button>
        <Signin />
      </div>
    )
  }
}

export default SigninPage
