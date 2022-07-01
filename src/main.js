import { createApp } from "vue";
import App from "./3-自定义指令/App.vue";
import registerDireactives from "./directives/index";
import pluginObject from "./plugins/plugins_object";

// createApp(App).mount('#app')

// 自定义全局指令
const app = createApp(App);

registerDireactives(app);

// 使用插件，传一个插件对象就可以了
app.use(pluginObject);

// 自定义全局指令
app.directive("focus", {
  mounted(el) {
    console.log("focus mounted");
    el.focus();
  },
});

app.mount("#app");
