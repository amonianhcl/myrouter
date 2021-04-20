import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
Vue.use(VueRouter)


const Category = () => { return import ('../views/Category/Category') };
const Cart = () => { return import ('../views/Cart/Cart') };
const Profile = () => { return import ('../views/Profile/Profile') };

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  
  base: process.env.BASE_URL,
  routes
})

export default router
