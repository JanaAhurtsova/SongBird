import birdsData from "./js/birds.js";
import { Article } from "./js/articles.js";
import "./sass/main.scss";

function renderArticles(data) {
  data.forEach((article) =>
    article.forEach((item) => {
      const card = new Article(item);
      card.buildArticle();
    })
  );
}

window.onload = function () {
  if (birdsData) {
    renderArticles(birdsData);
  }
};
