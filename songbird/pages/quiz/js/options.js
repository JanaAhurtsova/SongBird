export class Option {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  generateOption() {
    let template = "";
    const option = document.createElement("li");
    option.className = "option__item";
    option.setAttribute("data-id", this.id);

    template += `<div class="option"></div>`;
    this.name && (template += `<h3 class="option__name">${this.name}</h3>`);

    option.innerHTML = template;
    return option;
  }
}
