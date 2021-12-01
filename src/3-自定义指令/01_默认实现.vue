<template>
  <div id="app">
    <input type="text" ref="input" />
  </div>
</template>

<script type="text/javascript">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const input = ref(null);

    onMounted(() => {
      console.log(input.value);
      // 自动获取焦点
      input.value.focus()
    });

    return {
      input,
    };
  },
};
</script>

<style scoped>
</style>
