const activateTab = (tabItems, formItems, className = "active") => {
  const clearActiveTabs = (element) => {
    element.forEach((item) => item.classList.remove(className));
  };

  const setActiveTabs = (element, index) => {
    element[index].classList.add(className);
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
};

const tabItems = Array.from(document.querySelectorAll(".personal__left-item"));
const formItems = Array.from(
  document.querySelectorAll(".personal__form-right")
);

activateTab(tabItems, formItems);

// /*****************************/
function range() {
  var val = document.querySelector(".range").value;
  document.querySelector(".range").style.background =
    "-webkit-linear-gradient(left, #3dffc8 0%,#00ffb7 " +
    val +
    "%,#313137 " +
    val +
    "%,#313137 100%)";
}
// const slider = document.getElementById("slider");
// const sliderValue = document.getElementById("sliderValue");

// slider.addEventListener("input", function () {
//   sliderValue.innerHTML = this.value;
// });
