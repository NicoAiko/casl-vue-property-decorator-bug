import Vue from 'vue';
import App from './App.vue';
import { abilitiesPlugin } from '@casl/vue';
import { buildAbility } from './abilities';

Vue.config.productionTip = false;
const abilities = buildAbility();
Vue.use(abilitiesPlugin, abilities);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
