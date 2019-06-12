import WiFiConfig from './components/wifi/Rocket'
import OtherConfig from './components/other/OtherConfig'

const routes = [
  /* wifi config */
  {
    path: '/',
    alias: '/rocket',
    component: WiFiConfig,
  },
  {
    path: '/stretch',
    component: WiFiConfig,
  },
  {
    path: '/arrow',
    component: WiFiConfig,
  },
  /* end wifi config */
  /* other config */
  {
    path: '/pants',
    component: OtherConfig,
  },
  /* end other config */
]

export default routes
