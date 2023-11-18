function setEventListeners(htmlElement) {}
const itemTemplate = document.querySelector(".template").content;
const elements = document.querySelector(".elements");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const imageCard = htmlElement.querySelector(".card-image");
  const cardPrice = htmlElement.querySelector(".card-price");
  const gameName = htmlElement.querySelector(".game-name");
  const gameCount = htmlElement.querySelector(".game-count");
  const gameIcon = htmlElement.querySelector(".card-label");

  // Проверяем наличие значения поля в объекте item перед присваиванием его элементу
  if (item.link) {
    imageCard.src = item.link;
  }
  if (item.price) {
    cardPrice.textContent = item.price;
  }
  if (item.name) {
    gameName.textContent = item.name;
  }
  if (item.count) {
    gameCount.textContent = item.count;
  }
  if (item.icon) {
    gameIcon.src = item.icon;
  }

  setEventListeners(htmlElement);

  return htmlElement;
}

initialCards.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
