// const tabItems = Array.from(document.querySelectorAll(".personal__left-item"));
// const formItems = Array.from(
//   document.querySelectorAll(".personal__form-right")
// );

// const clearActiveTabs = (element, className = "active") => {
//   element.find((item) => item.classList.remove(`${className}`));
// };

// const setActiveTabs = (element, index, className = "active") => {
//   element[index].classList.add(`${className}`);
// };

// const chekTab = (item, index) => {
//   item.addEventListener("click", () => {
//     clearActiveTabs(tabItems);
//     clearActiveTabs(formItems);

//     setActiveTabs(tabItems, index);
//     setActiveTabs(formItems, index);
//   });
// };
// tabItems.forEach(chekTab);
// /***********/
// const slider = document.getElementById("slider");
// const sliderValue = document.getElementById("sliderValue");

// slider.addEventListener("input", function () {
//   sliderValue.innerHTML = this.value;
// });
// /*****************************/
const itemTemplate = document.querySelector(".template").content;
const elements = document.querySelector(".elements");

function setEventListeners(htmlElement) {}
/***создать карточку***/
function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const imageCard = htmlElement.querySelector(".card-image");
  const cardPrice = htmlElement.querySelector(".card-price");
  const gameName = htmlElement.querySelector(".game-name");
  const gameCount = htmlElement.querySelector(".game-count");
  const gameIcon = htmlElement.querySelector(".card-label");
  imageCard.src = item.link;
  cardPrice.textContent = item.price;
  gameName.textContent = item.name;
  gameCount.textContent = item.count;
  gameIcon.src = item.icon;
  setEventListeners(htmlElement);
  return htmlElement;
}

initialCards.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.prepend(elementCreate);
});
