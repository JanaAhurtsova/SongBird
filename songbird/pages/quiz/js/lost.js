export class ResultsLost {
  constructor(score) {
    this.score = score;
    this.gameButton = "";
  }

  resultsIfLost() {
    let template = '';
    const article = document.createElement('article');
    article.className = 'results__wrapper';

      template += `<h2 class="congratulations">Молодец!</h2>`
      template += `<p class="congratulations__text">У тебя ${this.score} из 30 возможных баллов! <br>
      Немного не хватило до максимума, но не надо отчаиваться! <br> Ты можешь попробовать еще!</p>`
      template += `<img class="result__img" src="../../assets/quiz/gif/lost.gif" alt="lost" />`
      template += `<audio autoplay loop src="../../assets/quiz/win.mp3" class="you__win"></audio>`;

    article.innerHTML = template;
    return article;
  }

  buildResultsIfLost() {
    let content = this.resultsIfLost();

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal');

    this.logo = this.createDomNode(this.logo, 'span', 'logo')
    this.logo.innerHTML = `Song<span>Bird</span>`;

    //Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    //button for play again
    this.gameButton = this.createDomNode(this.gameButton, 'button', 'play-again');
    this.gameButton.textContent = "Попробовать еще!";

    this.setContent(content);

    this.appendResultsElements();

    // Bind Events
    this.bindEvents();

    //open modal
    this.openModal();
  }

  createDomNode (node, element, ...classes){
    node = document.createElement(element);
    node.classList.add(...classes);
    return node
  };

  setContent(content) {
    if(typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }

  appendResultsElements() {
    this.modalContent.prepend(this.logo);
    this.modalContent.append(this.gameButton);
    this.modal.append(this.modalContent);
  }

  bindEvents() {
    this.gameButton.addEventListener('click', this.changeLocation.bind(this));
  }

  changeLocation() {
    window.location.replace(`../quiz/index.html`);
  }

  openModal() {
    document.body.append(this.modal);
  }
}