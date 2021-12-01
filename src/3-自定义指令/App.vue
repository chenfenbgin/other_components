<template>
  <div id="app">
    <!-- <input type="text" v-focus /> -->
    <button v-chen @click="increment">当前计数：{{ counter }}</button>
  </div>
</template>

<script type="text/javascript">
import { ref } from "vue";

export default {
  directives: {
    chen: {
      // 定义指令的很多生命周期
      created() {
        console.log("chen created");
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

<style scoped>
</style>
