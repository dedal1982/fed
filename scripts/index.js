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
// function range() {
//   var val = document.querySelector(".range").value;
//   document.querySelector(".range").style.background =
//     "-webkit-linear-gradient(left, #3dffc8 0%,#00ffb7 " +
//     val +
//     "%,#313137 " +
//     val +
//     "%,#313137 100%)";
// }
// const slider = document.getElementById("slider");
// const sliderValue = document.getElementById("sliderValue");

// slider.addEventListener("input", function () {
//   sliderValue.innerHTML = this.value;
// });
var sheet = document.createElement("style");
var rangeInput = document.querySelector(".range input");
var trackStyle = getTrackStyle(rangeInput);

document.body.appendChild(sheet);

rangeInput.addEventListener("input", function () {
  sheet.textContent = getTrackStyle(this);
});

var rangeLabels = document.querySelectorAll(".range-labels li");
for (var i = 0; i < rangeLabels.length; i++) {
  rangeLabels[i].addEventListener("click", function () {
    var index = Array.prototype.indexOf.call(rangeLabels, this);
    rangeInput.value = index + 1;
    rangeInput.dispatchEvent(new Event("input"));
  });
}

function getTrackStyle(el) {
  var curVal = el.value;
  var val = (curVal - 1) * 32;
  var style = "";

  // Set active label
  var rangeLabels = document.querySelectorAll(".range-labels li");
  for (var i = 0; i < rangeLabels.length; i++) {
    rangeLabels[i].classList.remove("active", "selected");
  }

  var curLabel = document
    .querySelector(".range-labels")
    .querySelector("li:nth-child(" + curVal + ")");

  curLabel.classList.add("active", "selected");
  var prevLabels = curLabel.previousElementSibling;
  while (prevLabels) {
    prevLabels.classList.add("selected");
    prevLabels = prevLabels.previousElementSibling;
  }

  // Change background gradient
  var prefs = ["webkit-slider-runnable-track", "moz-range-track", "ms-track"];
  for (var i = 0; i < prefs.length; i++) {
    style +=
      ".range {background: linear-gradient(to right, #37adbf 0%, #37adbf " +
      val +
      "%, #fff " +
      val +
      "%, #fff 100%)}";
    style +=
      ".range input::-" +
      prefs[i] +
      "{background: linear-gradient(to right, #37adbf 0%, #37adbf " +
      val +
      "%, #b2b2b2 " +
      val +
      "%, #b2b2b2 100%)}";
  }

  return style;
}
