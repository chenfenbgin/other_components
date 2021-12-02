<template>
  <div id="app">
    <!-- 以后如果需要对时间进行格式化，只需要加上这个指令就行了，v-format-time -->
    <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
  </div>
</template>

<script type="text/javascript">
export default {
  setup() {
    const timestamp = 1624452193;

    

    return{
      timestamp
    }
  },
};
</script>

<style scoped>
</style>
