import _ from "lodash";
import printMe from "./print";
import "./style.css";

if (process.env.NODE_ENV != "production") {
  console.log("开发环境");
} else {
  console.log("生产环境");
}

function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");
  element.innerHTML = _.join(["Hello1", "webpack"], " ");
  button.innerHTML = "click me";
  button.onclick = printMe;
  element.appendChild(button);
  return element;
}
var element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("printMe modulen Update");
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  });
}
