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

// const registrForm = document.getElementById("formReg");
// const registrFormAuth = document.getElementById("formAuth");

// document.getElementById("registr").onclick = function () {
//   registrForm.classList.add("active");
//   registrFormAuth.classList.remove("active");
// };
