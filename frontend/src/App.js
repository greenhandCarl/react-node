import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import routes from './routers'

const { Content, Footer } = Layout
const RouteWithSubRouters = (route) => {
  console.log(route)
  return <Route path={route.path} render={props => {
    return (<route.component {...props} />)
  }} />
}
class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Content>
            <Switch>
              {
                routes.map((route, index) => (
                  <RouteWithSubRouters key={index} {...route} />
                ))
              }
            </Switch>
          </Content>
          <Footer>
            11
          </Footer>
        </Layout>
      </Router>
    )
  }
}

export default App
