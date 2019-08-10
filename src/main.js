import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'styles/pages/index'

import {
  JslAvatar,
  JslBtnScalableJump,
  JslButton,
  JslClose,
  JslGrid,
  JslGridItem,
  JslLoading,
  JslNavBar,
  JslNomoreTip,
  JslToast
} from 'jsl-vue-h5'
import 'jsl-vue-h5/dist/jsl-vue-h5.min.css'

Vue.use(JslAvatar)
Vue.use(JslBtnScalableJump)
Vue.use(JslButton)
Vue.use(JslClose)
Vue.use(JslGrid)
Vue.use(JslGridItem)
Vue.use(JslLoading)
Vue.use(JslNavBar)
Vue.use(JslNomoreTip)
Vue.use(JslToast)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
