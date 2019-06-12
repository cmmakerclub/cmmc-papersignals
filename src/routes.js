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
    path: '/stretch',
    component: Stretch,
  },
  {
    path: '/arrow',
    component: Arrow,
  },
  {
    path: '/pants',
    component: Pants,
  },
  {
    path: '/countdown',
    component: Countdown,
  },
  /* end other config */
]

export default routes
