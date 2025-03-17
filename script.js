function onClick() {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('open');

    const background = document.querySelector('.container');
    background.classList.toggle('opened');
  }