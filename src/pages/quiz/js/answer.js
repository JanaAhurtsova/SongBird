import birdsData from "./birds.js";
import num from "./game.js";
import { Option } from "./options.js";

const options = document.querySelector(".options");

const generateOptions = (data, ind) => {
  let optionsArr = [];
  data[ind].forEach((option) => {
    optionsArr.push(new Option(option.id, option.name));
  });
  return optionsArr;
};

const getOptionsWrapper = () => {
  options.innerHTML = "";
  return options;
};

const renderOptionsToDom = (data, ind) => {
  const optionsWrapper = getOptionsWrapper();
  generateOptions(data, ind).forEach((option) => {
    optionsWrapper.append(option.generateOption());
  });
};

window.onload = function () {
  // Render Options
  renderOptionsToDom(birdsData, num);
};

export { options, renderOptionsToDom };
