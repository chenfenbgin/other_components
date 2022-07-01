// 一旦写render函数，template就不需要了

<script type="text/javascript">
import { h, ref } from "vue";

export default {
  // counter可以有两种写法： 在data中定义，也可以在setup中定义; setup是可以替代data的，也可以替代render
  setup() {
    const counter = ref(0);

    // return {
    //   counter,
    // };

    return () => {
      // h2函数的执行可以返回一个vnode
      // setup可以替换掉data, 也是可以替代render函数的
      return h("div", { class: "app" }, [
        h("h2", null, `当前计数： ${counter.value}`), //这里不需要使用this
        h(
          "button",
          {
            onClick: () => counter.value++,
          },
          "+1"
        ),
        h(
          "button",
          {
            onClick: () => counter.value++,
          },
          "-1"
        ),
      ]);
    };
  },

  // render() {
  //   return h("div", { class: "app" }, [
  //     h("h2", null, `当前计数： ${this.counter}`), //这里可以使用this， render函数是有绑定this的
  //     h(
  //       "button",
  //       {
  //         onClick: () => this.counter++,
  //       },
  //       "+1"
  //     ),
  //     h(
  //       "button",
  //       {
  //         onClick: () => this.counter++,
  //       },
  //       "-1"
  //     ),
  //   ]);
  // },
};
</script>

<style scoped></style>
