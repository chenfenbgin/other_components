import { createApp } from 'vue'
import App from './3-自定义指令/App.vue'
import registerDireactives from './directives/index';

// createApp(App).mount('#app')

// 自定义全局指令
const app = createApp(App);

registerDireactives(app)

app.directive("focus", {
  mounted(el) {
    console.log("focus mounted");
    el.focus();
  },
})

app.mount('#app')
