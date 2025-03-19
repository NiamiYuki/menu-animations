function onClick() {
  const burger = document.querySelector('.menu__burger_button');
  const background = document.querySelector('.container');
  const menuPopup = document.querySelector('.menu__popup'); 

    if (menuPopup.classList.contains('hidden')) {
      menuPopup.classList.remove('hidden');
    } 
 
  burger.classList.toggle('open');
  burger.classList.toggle('rotated');
  burger.classList.toggle('open_burger');
  background.classList.toggle('opened');
}

function closeMenu() {
  const burger = document.querySelector('.menu__burger_button');
  const background = document.querySelector('.container');

  burger.classList.remove('open');
  burger.classList.remove('rotated');
  burger.classList.remove('open_burger');
  background.classList.remove('opened');
}