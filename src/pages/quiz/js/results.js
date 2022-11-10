export class Results {
  constructor(score) {
    this.score = score;
  }

  resultsIfWin() {
    let template = '';
    const article = document.createElement('article');
    article.className = 'win-results';

    template += `<div class="results__content">`
      template += `<h2 class="congratulations">Поздравляю!</h2>`
      template += `<p class="congratulations__text">Вот это да! 
      Ты набрал 30 из 30 возможных баллов! Присваиваю тебе звание "Птичий Шазам"</p>`
      template += `<img src="../../../assets/quiz/gig/win.gif" />`
    template += `<div>`

    article.innerHTML = template;
    return article;
  }

  buildResultsIfWin() {
    let content = this. resultsIfWin();

    setContent(content);
  }

  setContent(content) {
    if(typeof content === 'string') {
      document.querySelector('.game__wrapper').innerHTML = content;
    } else {
    document.querySelector('.game__wrapper').innerHTML = '';
    document.querySelector('.game__wrapper').appendChild(content);
    }
  }

  // resultsIfLost() {
  //   let template = '';
  //   const article = document.createElement('article');
  //   article.className = 'lost-results';

  //   template += `<div class="results__content">`
  //     template += `<h2 class="congratulations">Молодец!</h2>`
  //     template += `<p class="congratulations__text">У тебя ${this.score} из 30 возможных баллов! 
  //     Немного не хватило до максимума, но не надо отчаиваться! Ты можешь попробовать еще!"</p>`
  //     template += `<img src="../../../assets/quiz/gig/lost.gif" />`
  //   template += `<div>`

  //   article.innerHTML = template;
  //   return article;
  // }
  
}