import { Article } from "./articles.js";
import { ResultsWin } from "./results.js";
import { playNum, audio, duration, resetPlayer } from "./player.js";
import { options, renderOptionsToDom } from "./answer.js";
import birdsData from "./birds.js";

const birdImg = document.querySelector(".bird");
const birdName = document.querySelector(".name");
const correctAnswerWrapper = document.querySelector(".correct-answer");
const button = document.querySelector(".next-level");
const topics = document.querySelectorAll('.list__item');
let count = 5;
let num = 0;
export default num;

//set data-id for the list of questions
(function setAttribute() {
  for(let i = 0; i < 6; i++) {
    topics[i].setAttribute('data-id', i)
  }
})()

//get id of the data the same with clicked option
const getClickedData = (id) => {
  return birdsData[num].find(article => article.id == id)
}

//clear wrapper for the card of bird
const getArticleWrapper = () => {
  correctAnswerWrapper.innerHTML = "";
  return correctAnswerWrapper;
};

//render card of bird to DOM
const renderArticle = (article) => {
  getArticleWrapper();
  let card = new Article (article);
  card.buildArticle()
}

//check the selected answer with the correct one
const isWin = (id, e) => {
  if (birdsData[num][playNum].id === id) {
    birdImg.style.background = `url(${
      birdsData[num][id - 1].image
    }) center center/cover no-repeat`;
    birdName.textContent = birdsData[num][id - 1].name;
    audio.pause();
    audio.currentTime = 0;
    resetPlayer();
    document.querySelectorAll(".option")[id - 1].classList.add("correct");
    document.querySelector(".audio__win").play();
    button.removeAttribute('disabled');
    document.querySelector('.points').textContent = Number(document.querySelector('.points').textContent) + count;
    return true;
  }
    e.target.closest(".option__item").firstChild.classList.add("mistake");
    document.querySelector(".audio__mistake").play();
    count--;
    return false
}

//choice of answer
const checkAnswer = (e) => {
  if(e.target.closest(".option__item")) {
    const optionId = Number(e.target.closest(".option__item").dataset.id);
    let clickedArticleData = getClickedData(optionId);
    renderArticle(clickedArticleData);

    isWin(optionId, e);
  }
}

const renderResultsIfWin = () => {
  const youWin = new ResultsWin();
  youWin.buildResultsIfWin();
}

//next level or show results
const nextLevel = () => {
  if(num < 5) {
    num++;
    count = 5;

    //set active to the next level
    topics.forEach(item => item.classList.remove('active'));
    for(let item of topics) {
      if(+(item.dataset.id) === num) item.classList.add('active');
    }

    //update options
    getArticleWrapper();
    renderOptionsToDom(birdsData, num);
    options.addEventListener("click", checkAnswer);

    //reset player and set new sound
    resetPlayer();
    audio.src = birdsData[num][playNum].audio;
    console.log(birdsData[num][playNum].name)

    button.setAttribute('disabled', true);

    //reset styles
    correctAnswerWrapper.innerHTML = `<p class="text"> Прослушайте плеер. <br />
    Выберите верный ответ.</p>`;
    document.querySelector('.name').textContent = '* * * * * *';
    document.querySelector('.bird').style.backgroundImage = `url("../../assets/quiz/bird.jpg")`;
    duration.textContent = `00:00`;
  } else if(num === 5) {
    if(Number(document.querySelector('.points').textContent) === 30) {
      document.querySelector('.game__wrapper').innerHTML = '';
      renderResultsIfWin();
    // } else {
    //   renderResultsIfLost();
    }
  }
}

options.addEventListener("click", checkAnswer); //select answer
button.addEventListener('click', nextLevel); //move to the next level and reset page