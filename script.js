const burger = document.querySelector(".header__burger_button");
const header = document.querySelector(".header");
const menuPopup = document.querySelector(".header__popup");

function toggleMenu() {
  const classesToToggle = ["open", "rotated", "active"];
  
  classesToToggle.forEach(cls => {
    burger.classList.toggle(cls);
  });
  
  header.classList.toggle("opened");
  menuPopup.classList.toggle("active");
}

function closeMenu() {
  const classesToRemove = ["open", "rotated", "active"];
  
  classesToRemove.forEach(cls => {
    burger.classList.remove(cls);
  });
  
  header.classList.remove("opened");
  menuPopup.classList.remove("active");
}

// function slideMenu() {
//   const activeState = popup.classList.contains("active");
//   const keyframes = [{ right: activeState ? "0%" : "-100%" }, { right: activeState ? "-100%" : "0%" }];
//   menuPopup.animate(keyframes, {
//     duration: 300,
//     easing: "linear",
//   });
//   menuPopup.classList.toggle("active");
// }
