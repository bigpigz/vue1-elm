import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResourse from 'vue-resource'
Vue.use(VueResourse)
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import 'common/stylus/index.styl'

/* eslint-disable no-new */
/*new Vue({
  el: 'body',
  components: { App }
})*/

let app = Vue.extend(App)
let router = new VueRouter({
  linkActiveClass:'active'
})
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
router.go('/goods') //打开默认跳转页面
