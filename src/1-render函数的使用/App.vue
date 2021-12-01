<script type="text/javascript">
import { h } from "vue";
import HelloWorld from "./HelloWorld.vue";

export default {
  // 不需要注册，直接使用就行
  // components: {
  //   HelloWorld,
  // },
  // render() {
  //   return h(HelloWorld, {}, "");
  // },

// 传入多个插槽
    render() {
    return h(HelloWorld, null, {
      default: props => h("span", null, `app传入到Hello World中的内容: ${props.name}`)
    });
  },
};
</script>

<style scoped>
</style>
