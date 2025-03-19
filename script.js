function onClick() {
  const burger = document.querySelector('.menu__burger_button');
  const background = document.querySelector('.container');
  const menuPopup = document.querySelector('.menu__popup');  

  burger.classList.toggle('open');
  burger.classList.toggle('rotated');
  burger.classList.toggle('open_burger');
  background.classList.toggle('opened');
  menuPopup.classList.toggle('hidden');
}

function closeMenu() {
  const burger = document.querySelector('.menu__burger_button');
  const menuPopup = document.querySelector('.menu__popup');  
  const background = document.querySelector('.container');

  burger.classList.remove('open');
  burger.classList.remove('rotated');
  burger.classList.remove('open_burger');
  background.classList.remove('opened');
  menuPopup.classList.add('hidden');
}