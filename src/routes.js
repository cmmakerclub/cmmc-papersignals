import WiFiConfig from './components/wifi/WiFiConfig'

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
]

export default routes
