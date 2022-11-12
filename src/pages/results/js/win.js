export class ResultsWin {
  constructor() {}

  resultsIfWin() {
    let template = "";
    const article = document.createElement("article");
    article.className = "results__wrapper";

    template += `<h2 class="congratulations">Поздравляю!</h2>`;
    template += `<p class="congratulations__text">Вот это да! 
    У тебя получилось! <br> 30 из 30 возможных баллов! Присваиваю тебе звание: <span>"Птичий Шазам"</span>!</p>`;
    template += `<img class="win__img" src="../../assets/quiz/gif/win.gif" />`;
    template += `<audio autoplay src="../../assets/quiz/win.mp3" class="you__win"></audio>`;

    article.innerHTML = template;
    return article;
  }

  buildResultsIfWin() {
    let content = this.resultsIfWin();
    this.setContent(content);
  }

  setContent(content) {
    if (typeof content === "string") {
      document.querySelector(".game__wrapper").innerHTML = content;
    } else {
      document.querySelector(".game__wrapper").innerHTML = "";
      document.querySelector(".game__wrapper").appendChild(content);
    }
  }
}
