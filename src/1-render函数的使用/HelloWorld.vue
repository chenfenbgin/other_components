<script type="text/javascript">
import { h } from "vue";

export default {
  render() {
    // return h("h2", null, "hello world");
    return h("div", null, [
      h("h2", null, "hello world"),
      this.$slots.default ? this.$slots.default({name: 'chen'}) : h("span", null, "我是HelloWorld插槽的默认值"),
    ]);
  },
};
</script>

<style scoped>
</style>
