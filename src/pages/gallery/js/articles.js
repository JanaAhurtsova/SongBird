export class Article {
  constructor({ id, name, species, description, image, audio }) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.description = description;
    this.image = image;
    this.audio = audio;
    this.article = "";
    this.cardMedia = "";
    this.birdImg = "";
    this.birdsSpecies = "";
    this.nameBird = "";
    this.speciesBird = "";
    this.player = "";
    this.playBtn = "";
    this.progressBar = "";
    this.seekBar = "";
    this.fillBar = "";
    this.handle = "";
    this.audioCard = "";
    this.playerTimes = "";
    this.currentTime = "";
    this.duration = "";
    this.descriptionCard = "";
    this.isPlay = false;
  }

  buildArticle() {
    //wrapper for card
    this.article = this.createDomNode(this.article, "article", "card");
    this.article.setAttribute("data-id", this.id);

    //wrapper for media
    this.cardMedia = this.createDomNode(this.cardMedia, "div", "card__media");

    //image
    this.birdImg = this.createDomNode(this.birdImg, "img", "bird__img");
    this.birdImg.src = this.image;

    //block for name, species and player
    this.birdsSpecies = this.createDomNode(
      this.birdsSpecies,
      "div",
      "bird-species"
    );

    this.nameBird = this.createDomNode(this.nameBird, "h2", "name");
    this.nameBird.textContent = this.name;

    this.speciesBird = this.createDomNode(this.speciesBird, "h3", "species");
    this.speciesBird.textContent = this.species;

    this.player = this.createDomNode(this.player, "div", "player");

    this.playBtn = this.createDomNode(
      this.playBtn,
      "button",
      "play",
      "player__icon"
    );

    this.progressBar = this.createDomNode(
      this.progressBar,
      "div",
      "progress-bar"
    );

    this.seekBar = this.createDomNode(this.seekBar, "div", "seekbar");

    this.fillBar = this.createDomNode(this.fillBar, "div", "fill");

    this.handle = this.createDomNode(this.handle, "div", "handle");

    this.audioCard = this.createDomNode(this.audioCard, "audio", "card__audio");
    this.audioCard.src = this.audio;

    this.playerTimes = this.createDomNode(
      this.playerTimes,
      "div",
      "player-time"
    );

    this.currentTime = this.createDomNode(
      this.currentTime,
      "div",
      "current-time"
    );
    this.currentTime.innerHTML = "00:00";

    this.duration = this.createDomNode(this.duration, "div", "duration");
    this.duration.innerHTML = "00:00";

    this.descriptionCard = this.createDomNode(
      this.description,
      "p",
      "description"
    );
    this.descriptionCard.textContent = this.description;

    this.appendArticleElements();

    this.showCard();

    // Bind Events
    this.bindEvents();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  appendArticleElements() {
    this.playerTimes.append(this.currentTime, this.duration);
    this.seekBar.append(this.fillBar, this.handle);
    this.progressBar.append(this.seekBar, this.audioCard, this.playerTimes);
    this.player.append(this.playBtn, this.progressBar);
    this.birdsSpecies.append(this.nameBird, this.speciesBird, this.player);
    this.cardMedia.append(this.birdImg, this.birdsSpecies);
    this.article.append(this.cardMedia, this.descriptionCard);
  }

  showCard() {
    document.querySelector(".gallery__list").append(this.article);
  }

  bindEvents() {
    this.playBtn.addEventListener("click", this.playAudio.bind(this));
    this.audioCard.addEventListener(
      "timeupdate",
      this.updateProgress.bind(this)
    );
    this.audioCard.addEventListener("ended", this.resetPlayStyle.bind(this));
    this.seekBar.addEventListener("click", this.setPositionSeekbar.bind(this));
  }

  playAudio() {
    if (!this.isPlay) {
      this.audioCard.play();
      this.isPlay = true;
      this.playBtn.classList.add("pause");
    } else {
      this.audioCard.pause();
      this.isPlay = false;
      this.playBtn.classList.remove("pause");
    }
  }

  resetPlayStyle() {
    this.playBtn.classList.remove("pause");
    this.audioCard.currentTime = 0;
    this.seekBar.value = 0;
  }

  setPositionSeekbar(e) {
    const progressWidth = this.seekBar.clientWidth;
    const clickedOffsetX = e.offsetX;

    this.audioCard.currentTime =
      (clickedOffsetX / progressWidth) * this.audioCard.duration;
    this.audioCard.play();
  }

  updateProgress() {
    this.fillBar.max = this.audioCard.duration;
    this.fillBar.value = this.audioCard.currentTime;
    if (!isNaN(this.audioCard.duration)) {
      const seekPosition = this.audioCard.currentTime / this.audioCard.duration;
      this.fillBar.style.width = seekPosition * 100 + "%";

      this.currentTime.innerHTML = this.formatTime(
        Math.floor(this.audioCard.currentTime)
      );
      this.duration.innerHTML = this.formatTime(
        Math.floor(this.audioCard.duration)
      );
    }
  }

  formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - min * 60);
    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }
    return `${min}:${sec}`;
  }
}
