import Vue from 'vue';
import { HomeComponent } from './components/home';

import './sass/main.scss';

new Vue({
  el: '#app',
  render: h => h(HomeComponent)
});
