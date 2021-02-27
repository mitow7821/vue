import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import CustomComponent from "@/components/CustomComponent.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("CustomComponent", CustomComponent)
  .directive("colorful", {
    beforeMount(el) {
      el.style.color = "#eaa347";
    }
  })
  .mount("#app");
