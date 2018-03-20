import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'reat-router-dom'
import { Layout, BackTop } from 'antd'
import routes from './routers'

const { Content, Footer } = Layout
const RouteWithSubRouters = (route) => {
  return <Route path={route.path} render={props => {
      <route.component {...props} routes={route.routes} user={route.user} status={route.state} />
    }} />
}

class App extends Component {
  render () {
    return (
      <Router>
        <Layout>
          <Content>
            <Switch>
              {routes.map((route, index) => {
                return (
                  <RouteWithSubRouters key={index} {...route} user={user} status={status} />
                )
              })}
            </Switch>
          </Content>
            <Footer>
            </Footer>
        </Layout>
      </Router>
    )
  }
}