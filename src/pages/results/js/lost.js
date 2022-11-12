export class ResultsLost {
  constructor(score) {
    this.score = score;
    this.gameButton = "";
  }

  resultsIfLost() {
    let template = '';
    const article = document.createElement('article');
    article.className = 'lost-results';

    template += `<div class="results__content">`
      template += `<h2 class="congratulations">Молодец!</h2>`
      template += `<p class="congratulations__text">У тебя ${this.score} из 30 возможных баллов!
      Немного не хватило до максимума, но не надо отчаиваться! Ты можешь попробовать еще!"</p>`
      template += `<img src="../../../assets/quiz/gig/lost.gif" />`
    template += `<div>`

    article.innerHTML = template;
    return article;
  }

  buildResultsIfWin() {
    let content = this.resultsIfWin();

    this.gameButton = document.createElement('button');
    gameButton.className = 'play-again';

    this.setContent(content);

    this.appendResultsElement(content);

    // Bind Events
    this.bindEvents();
  }

  setContent(content) {
    if (typeof content === "string") {
      document.querySelector(".game__wrapper").innerHTML = content;
    } else {
      document.querySelector(".game__wrapper").innerHTML = "";
      document.querySelector(".game__wrapper").appendChild(content);
    }
  }

  appendResultsElement(content) {
    content.append(this.gameButton);
  }

  bindEvents() {
    this.gameButton.addEventListener('click', this.changeLocation.bind(this))
  }

  changeLocation() {
    location = ``
  }
}