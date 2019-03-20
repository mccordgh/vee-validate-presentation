import Vue from 'vue'
import VeeValidate from 'vee-validate';

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VeeValidate, { events: 'blur' });

new Vue({
  render: h => h(App),
}).$mount('#app')
