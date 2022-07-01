// 一旦写render函数，template就不需要了

<script type="text/javascript">
import { h } from "vue";

export default {
  // counter可以有两种写法： 在data中定义
  data() {
    return {
      counter: 0,
    };
  },

  //render()函数的执行需要返回一个vnode，而 h函数 可以返回vnode
  render() {
    return h("div", { class: "app" }, [
      h("h2", null, `当前计数： ${this.counter}`),
      h(
        "button",
        {
          onClick: () => this.counter++,
        },
        "+1"
      ),
      h(
        "button",
        {
          onClick: () => this.counter++,
        },
        "-1"
      ),
    ]);
  },
};
</script>

<style scoped></style>
