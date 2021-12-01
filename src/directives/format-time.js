//npm install dayjs， 这是对时间进行处理的一个库
import dayjs from "dayjs";

export default function (app) {
  app.directive("format-time", {
    mounted(el, bindings) {

      let formatString = bindings.value;
      if (!formatString) {
        formatString = "YYYY-MM-DD HH:mm:ss"
      }

      const textContent = el.textContent
      console.log('textContent', textContent, typeof textContent);

      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        timestamp = timestamp * 1000
      }
      el.textContent = dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss")
    }
  })
}