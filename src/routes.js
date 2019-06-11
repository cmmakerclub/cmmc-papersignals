import WiFiConfig from './components/wifi/WiFiConfig'
import OtherConfig from './components/other/OtherConfig'

const routes = [
  /* wifi config */
  {
    path: '/',
    alias: '/wifi',
    component: WiFiConfig,
  },
  {
    path: '/wifi/ap',
    component: WiFiConfig,
  },
  {
    path: '/wifi/sta',
    component: WiFiConfig,
  },
  /* end wifi config */
  /* other config */
  {
    path: '/other-config',
    component: OtherConfig,
  },
  /* end other config */
]

export default routes
