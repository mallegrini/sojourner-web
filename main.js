import Vue from 'vue'

import store from './store'
import init from './init'
import {router} from './pages'
import App from '@/layout/App'

init()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<app></app>',
  components: {
    app: App
  }
})
