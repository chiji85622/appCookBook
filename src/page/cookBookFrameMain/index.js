import Bootstrap from '../../units/bootstrap';
import Flexible from '../../units/flexible';
import Vue from 'vue';
import App from './components/app';

Flexible(414,750);

Bootstrap(()=>{
  new Vue({
    el:'#app',
    components:{App},
    template:'<app/>'
  })
})

