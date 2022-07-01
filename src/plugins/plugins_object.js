// 导出的是一个对象
export default {
  // install函数必须有
  install(app) {
    console.log(app);
    // 其他文件中的话，可以直接使用this.$name获取，
    // setup中，需要使用getCurrentInstance先拿到组件实例，
    // setup中这么获取： getCurrentInstance.appContext.globalProperties.$name
    app.config.globalProperties.name = "chenfeng";
    app.config.globalProperties.$name = "chenfeng";
  },
};
