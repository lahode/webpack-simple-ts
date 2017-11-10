import Vue from 'vue';
import Component from 'vue-class-component';

import './home.scss';

@Component({
    template: require('./home.html'),
    props: ['mode']
})
export class HomeComponent extends Vue {
}
