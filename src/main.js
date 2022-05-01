import "./assets/sass/main.scss";

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false



Vue.component('ButtonAddTask', require('./components/ComponentButtonAddTask').default);
Vue.component('ModuleAddTask', require('./components/ComponentModuleAddTask').default);

Vue.prototype.$eventBus = window.$eventBus = new Vue();

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
