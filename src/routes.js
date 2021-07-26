import Home from './views/Home.vue'
import Down from './views/Down.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export let routes = [
  { path: '', component: Home, meta: { title: 'Home' } },
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/down', component: Down, meta: { title: 'Down' } },
  { path: '/:path(.*)', component: Down },
]
