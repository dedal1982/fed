function setEventListeners(htmlElement) {}
const itemTemplate = document.getElementById("shop-template").content;
const elements = document.querySelector(".elements");

function createCard(item) {
  const htmlElement = itemTemplate.cloneNode(true);
  const imageCard = htmlElement.querySelector(".card-image");
  const cardPrice = htmlElement.querySelector(".card-price");
  const gameName = htmlElement.querySelector(".cheat-name");
  const gameCheatName = htmlElement.querySelector(".cheat-game-name");
  const gameIcon = htmlElement.querySelector(".card-label-shop");

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
  if (item.gamename) {
    gameCheatName.textContent = item.gamename;
  }
  if (item.icon) {
    gameIcon.src = item.icon;
  }

  setEventListeners(htmlElement);

  return htmlElement;
}

shopInitialCards.forEach(function (item) {
  const elementCreate = createCard(item);
  elements.append(elementCreate);
});
