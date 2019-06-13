import Rocket from './components/signals/Rocket'
import Arrow from './components/signals/Arrow'
import Pants from './components/signals/Pants'
import Stretch from './components/signals/Stretch'
import Countdown from './components/signals/Countdown'

const routes = [
  /* signals config */
  {
    path: '/',
    alias: '/rocket',
    component: Rocket,
  },
  {
    path: '/rocket/:id?',
    alias: '/rocket',
    component: Rocket,
  },
  {
    path: '/stretch/:id?',
    alias: '/stretch',
    component: Stretch,
  },
  {
    path: '/arrow/:id?',
    component: Arrow,
  },
  {
    path: '/pants/:id?',
    component: Pants,
  },
  {
    path: '/countdown/:id?',
    component: Countdown,
  },
  /* end other config */
]

export default routes
