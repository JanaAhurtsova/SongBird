import { ResultsWin } from "./win.js";
import { ResultsLost } from "./lost.js";

const renderResultsIfWin = () => {
  const youWin = new ResultsWin();
  youWin.buildResultsIfWin();
};

const renderResultsIfLost = (score) => {
  const youLost = new ResultsLost(score);
  youLost.buildResultsIfLost();
};

export {renderResultsIfWin, renderResultsIfLost}