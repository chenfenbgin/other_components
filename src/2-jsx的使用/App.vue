<script type="text/javascript">
import HelloWorld from "./HelloWorld.vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    const increment = () => this.counter++;
    const decrement = () => this.counter--;
    // jsx代码, jsx语法就是使用{}赋值
    return (
      <div>
        <h2>当前计数： {this.counter}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <HelloWorld>
          {{ default: (props) => <button>`我是按钮{props.name}`</button> }}
        </HelloWorld>
      </div>
    );
  },
};
</script>

<style scoped></style>
