import Bootstrap from '../../units/bootstrap';
import Flexible from '../../units/flexible';
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './components/app';

Vue.use(VueLazyload);

Flexible(414,750);

Bootstrap(()=>{
  new Vue({
    el:'#app',
    components:{App},
    template:'<app/>'
  })
})

