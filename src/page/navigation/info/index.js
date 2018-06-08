import Vue from "vue";
import { Bootstrap, Flexible } from "@/units";
import App from "./app";

Flexible(__desgin.width, __desgin.max);

Bootstrap(() => {
  new Vue({
    el: "#app",
    components: { App },
    template: "<app/>"
  });
});

// TODO：414*(736-114-20)