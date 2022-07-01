<template>
  <div id="app">
    <!-- <input type="text" v-focus /> -->
    <button v-if="counter < 5" v-chen.aaa.bbb="'chen'" @click="increment">
      当前计数：{{ counter }}
    </button>
  </div>
</template>

<script type="text/javascript">
import { ref } from "vue";

export default {
  directives: {
    chen: {
      // 定义指令的很多生命周期
      created(el, bindings) {
        console.log("chen created", el, bindings);
        // 修饰符，还有参数，都放在bindings中, aaa.bbb 就是放到bindings
        console.log("bindings", bindings.value, bindings.modifiers);
        console.log("bindings", bindings.modifiers); //拿到修饰符
      },
      beforeMount() {
        console.log("chen beforeMount");
      },

      mounted() {
        console.log("chen mounted");
      },
      beforeUpdate() {
        console.log("chen beforeUpdate");
      },
      updated() {
        console.log("chen updated");
      },
      beforeUnmount() {
        console.log("chen beforeUnmount");
      },
      unmounted() {
        console.log("Chen unmounted");
      },
    },
  },
  setup() {
    const counter = ref(0);
    const increment = () => counter.value++;
    return {
      counter,
      increment,
    };
  },
};
</script>

<style scoped></style>
