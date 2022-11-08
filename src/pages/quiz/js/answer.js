import birdsData from "./birds.js";
import { num, playNum } from "./player.js";
import { Option } from "./options.js";

const options = document.querySelector(".options");

export default options;

function generateOptions(data, ind) {
  let optionsArr = [];
  data[ind].forEach((option) => {
    optionsArr.push(new Option(option.id, option.name));
  });
  return optionsArr;
}

const getOptionsWrapper = () => {
  options.innerHTML = "";
  return options;
};

const renderOptionsToDom = () => {
  const optionsWrapper = getOptionsWrapper();
  generateOptions(birdsData, num).forEach((option) => {
    optionsWrapper.append(option.generateOption());
  });
};

window.onload = function () {
  // Render Options
  renderOptionsToDom();
};