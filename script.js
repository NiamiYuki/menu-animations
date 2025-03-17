function onClick() {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('open');
    burger.classList.toggle('rotated');

    const background = document.querySelector('.container');
    background.classList.toggle('opened');

  }