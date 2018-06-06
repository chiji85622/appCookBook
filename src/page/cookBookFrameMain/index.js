import Bootstrap from '../../units/bootstrap';
import Flexible from '../../units/flexible';
import Vue from 'vue';
import App from './components/app';

Flexible(__desgin.width, __desgin.max);

Bootstrap(()=>{
  new Vue({
    el:'#app',
    components:{App},
    template:'<app/>'
  })
})

