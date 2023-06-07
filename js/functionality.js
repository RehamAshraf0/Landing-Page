/* Functionality for FAQs section */

const quests = document.querySelectorAll(".section-5__quest");

const showAnswer = function () {
  const ansNum = this.dataset.ans;
  document.querySelector(`.section-5__ans--${ansNum}`).classList.toggle("none");
  this.classList.toggle("section-5__quest--active");
  this.querySelector(".section-5__icon--up").classList.toggle("none");
  this.querySelector(".section-5__icon--down").classList.toggle("none");
};

quests.forEach((quest) => quest.addEventListener("click", showAnswer));

/* Functionality disclaimer button */

const disclaimers = document.querySelectorAll(".disclaimer");

const showContent = function () {
  this.querySelector(".disclaimer__content").classList.toggle("none");
};

disclaimers.forEach((disclaimer) =>
  disclaimer.addEventListener("click", showContent)
);
