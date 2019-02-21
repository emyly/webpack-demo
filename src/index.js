import _ from "lodash";
import "./style.css";
import Jpg from "./WechatIMG105.jpg";
import Data from "./data.xml";
function component() {
  var element = document.createElement("div");

  element.innerHTML = _.join(["Hello1", "webpack"], " ");
  element.className += "hello";
  var myIcon = new Image();
  myIcon.src = Jpg;
  element.appendChild(myIcon);
  console.log(Data);
  return element;
}

document.body.appendChild(component());
