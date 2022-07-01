//npm install dayjs， 这是对时间进行处理的一个库
import dayjs from "dayjs";

export default function (app) {
  app.directive("format-time", {
    mounted(el, bindings) {
      let formatString = bindings.value;
      // 看别人有没有传修饰符
      if (!formatString) {
        formatString = "YYYY-MM-DD HH:mm:ss";
      }

      const textContent = el.textContent;
      console.log("textContent", textContent, typeof textContent);//类型是string

      let timestamp = parseInt(textContent);
      // 如果时间戳是10位，那表示的是秒钟，13才是毫秒
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
      }
      el.textContent = dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
    },
  });
}
