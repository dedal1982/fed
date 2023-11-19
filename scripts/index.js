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

function setActive(button) {
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  button.classList.add("active");
}

var buttons = document.getElementsByClassName("button");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    setActive(this);
  });
}
