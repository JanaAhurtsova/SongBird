import { ResultsWin } from "./win.js";

const renderResultsIfWin = () => {
  document.querySelector(".game__wrapper").innerHTML = "";
  const youWin = new ResultsWin();
  youWin.buildResultsIfWin();
};

const renderResultsIfLost = () => {

}

export {renderResultsIfWin, renderResultsIfLost};