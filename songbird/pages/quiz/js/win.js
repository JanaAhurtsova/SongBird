export class ResultsWin {
  constructor() {}

  resultsIfWin() {
    let template = "";
    const article = document.createElement("article");
    article.className = "results__wrapper";

    template += `<h2 class="congratulations">Поздравляю!</h2>`;
    template += `<p class="congratulations__text">Вот это да! 
    У тебя получилось! <br> 30 из 30 возможных баллов! Присваиваю тебе звание: <span>"Птичий Шазам"</span>!</p>`;
    template += `<img class="result__img" src="../../assets/quiz/gif/win.gif" alt="win" />`;
    template += `<audio autoplay loop src="../../assets/quiz/win.mp3" class="you__win"></audio>`;

    article.innerHTML = template;
    return article;
  }

  buildResultsIfWin() {
    let content = this.resultsIfWin();

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal');

    this.logo = this.createDomNode(this.logo, 'a', 'logo');
    this.logo.href = "../main/index.html";
    this.logo.innerHTML = `Song<span>Bird</span>`;

    //Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    this.setContent(content);

    this.appendResultsElement();

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

  appendResultsElement() {
    this.modalContent.prepend(this.logo);
    this.modal.append(this.modalContent)
  }

  openModal() {
    document.body.append(this.modal);
  }
}
