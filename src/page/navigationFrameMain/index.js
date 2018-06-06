import Bootstrap from "../../units/bootstrap";
import Flexible from "../../units/flexible";
import Vue from "vue";
import App from "./components/app";

Flexible(__desgin.width * 0.3, __desgin.max * 0.3);

Bootstrap(() => {
  new Vue({
    el: "#app",
    components: { App },
    template: "<app/>"
  });
});
