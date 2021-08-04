const tabsButtons = document.querySelectorAll(".tabs__button");
const photosButtons = document.querySelectorAll(".photos-list__link");
const countryCards = document.querySelectorAll(".tabs__country");

const removeTabActiveClass = () => {
  Array.from(countryCards).forEach((tab) => {
    tab.classList.remove("tabs__country--current");
  });
};

const removeBtnActiveClass = () => {
  Array.from(tabsButtons).forEach((btn) => {
    btn.classList.remove("tabs__button--current");
  });
};

Array.from(tabsButtons).forEach((btn, index) => {
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    removeTabActiveClass();
    removeBtnActiveClass();
    tabsButtons[index].classList.add("tabs__button--current");
    countryCards[index].classList.add("tabs__country--current");
  });
});

Array.from(photosButtons).forEach((btn, index) => {
  btn.addEventListener("click", (evt) => {
    removeTabActiveClass();
    removeBtnActiveClass();
    tabsButtons[index].classList.add("tabs__button--current");
    countryCards[index].classList.add("tabs__country--current");
  });
});
