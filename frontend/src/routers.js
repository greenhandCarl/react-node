import SigninPage from './containers/SigninPage'
import RoomPage from './containers/RoomPage'

const routers = [
  {
    path: '/',
    exact: true,
    component: SigninPage
  },
  {
    path: '/room',
    exact: true,
    component: RoomPage
  }
]

export default routers
