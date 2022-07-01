<template>
  <div id="app">
    <!-- 这里ref不需要写成:ref='input', 这里的ref属性处理比较特殊，不像id，class等 -->
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
      // 调用input元素的focus()方法：自动获取焦点
      input.value.focus();
    });

    return {
      input,
    };
  },
};
</script>

<style scoped></style>
