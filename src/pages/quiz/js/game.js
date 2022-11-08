import { Article } from "./articles.js";
import { playNum, audio, play, duration } from "./player.js";
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

(function setAttribute() {
  for(let i = 0; i < 6; i++) {
    topics[i].setAttribute('data-id', i)
  }
})()

const getClickedData = (id) => {
  return birdsData[num].find(article => article.id == id)
}

const getArticleWrapper = () => {
  correctAnswerWrapper.innerHTML = "";
  return correctAnswerWrapper;
};

const renderArticle = (article) => {
  getArticleWrapper();
  let card = new Article (article);
  card.buildArticle()
}

function isWin(id) {
  if (birdsData[num][playNum].id === id) {
    birdImg.style.background = `url(${
      birdsData[num][id - 1].image
    }) center center/cover no-repeat`;
    birdName.textContent = birdsData[num][id - 1].name;
    audio.pause();
    audio.currentTime = 0;
    document.querySelectorAll(".option")[id - 1].classList.add("correct");
    play.classList.remove("pause");
    document.querySelector(".audio__win").play();
    options.removeEventListener("click", checkAnswer);
    button.removeAttribute('disabled');
    document.querySelector('.points').textContent = Number(document.querySelector('.points').textContent) + count;
    return true;
  } 
    document.querySelector(".audio__mistake").play();
    count--;
    return false
}

function checkAnswer(e) {
  if(e.target.closest(".option__item")) {
    const optionId = Number(e.target.closest(".option__item").dataset.id);
    let clickedArticleData = getClickedData(optionId);
    renderArticle(clickedArticleData);

    if (!isWin(optionId)) {
      e.target.closest(".option__item").firstChild.classList.add("mistake");
    }
  }
}

options.addEventListener("click", checkAnswer);

button.addEventListener('click', () => {
  num++;
  count = 5;

  topics.forEach(item => item.classList.remove('active'));
  for(let item of topics) {
    if(+(item.dataset.id) === num) item.classList.add('active');
  }

  getArticleWrapper();
  renderOptionsToDom(birdsData, num);
  options.addEventListener("click", checkAnswer);

  audio.src = birdsData[num][playNum].audio;

  button.setAttribute('disabled', true);

  correctAnswerWrapper.innerHTML = `<p class="text"> Прослушайте плеер. <br />
  Выберите верный ответ.</p>`;
  document.querySelector('.name').textContent = '??????';
  document.querySelector('.bird').style.backgroundImage = `url("../../assets/quiz/bird.jpg")`;
  duration.textContent = `00:00`;
})
