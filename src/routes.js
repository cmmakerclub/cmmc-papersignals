import Rocket from './components/signals/Rocket'
import Arrow from './components/signals/Arrow'
import Pants from './components/signals/Pants'
import Stretch from './components/signals/Stretch'

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
  /* end signals config */
  /* other config */
  {
    path: '/pants',
    component: Pants,
  },
  /* end other config */
]

export default routes
