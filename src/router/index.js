import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../components/Inicio.vue'
import Administracion from '../components/Administracion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Inicio
  },
  {
    path: '/administracion',
    component: Administracion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
