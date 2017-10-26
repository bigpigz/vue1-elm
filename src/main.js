import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'
/* eslint-disable no-new */
/*new Vue({
  el: 'body',
  components: { App }
})*/

let app = Vue.extend(App)
let router = new VueRouter()
router.map({
  '/goods':{
    component:goods
  },
  '/ratings':{
    component:ratings
  },
  '/seller':{
    component:seller
  }
})


router.start(app,'#app')
