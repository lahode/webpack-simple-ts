import Vue from 'vue';
import Component from 'vue-class-component';

import './home.scss';

@Component({
    template: require('./home.html')
})
export class HomeComponent extends Vue {
    msg: string = 'Welcome to Your Vue.js App';
    mode: any = process.env.ENV;
}
