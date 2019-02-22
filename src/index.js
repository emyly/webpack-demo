import _ from "lodash";
import printMe from "./print";
function component() {
  var element = document.createElement("div");
  var button = document.createElement("button");

  element.innerHTML = _.join(["Hello1", "webpack"], " ");
  button.innerHTML = "click me";
  button.onclick = printMe;
  element.appendChild(button);
  return element;
}

document.body.appendChild(component());
