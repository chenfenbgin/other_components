<template>
  <div id="app">
    <!-- 当我们对DOM进行底层操作的时候，就会使用自定义指令 -->
    <input type="text" v-focus />
  </div>
</template>

<script type="text/javascript">
// import { ref, onMounted } from "vue";

export default {
  // 定义局部指令，可以自定义多个指令
  // directives: {
  //   focus: {
  //     // 定义指令的很多生命周期，总共有四个参数，el, bindings, vnode, preVnode
  //     mounted(el) {
  //       console.log("focus mounted");
  //       el.focus();
  //     },
  //   },
  // },
};
</script>

<style scoped></style>
