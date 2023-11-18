const tabItems = Array.from(document.querySelectorAll(".personal__left-item"));
const formItems = Array.from(
  document.querySelectorAll(".personal__form-right")
);

const clearActiveTabs = (element, className = "active") => {
  element.find((item) => item.classList.remove(`${className}`));
};

const setActiveTabs = (element, index, className = "active") => {
  element[index].classList.add(`${className}`);
};

const chekTab = (item, index) => {
  item.addEventListener("click", () => {
    clearActiveTabs(tabItems);
    clearActiveTabs(formItems);

    setActiveTabs(tabItems, index);
    setActiveTabs(formItems, index);
  });
};
tabItems.forEach(chekTab);
/***********/
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function () {
  sliderValue.innerHTML = this.value;
});
// /*****************************/
