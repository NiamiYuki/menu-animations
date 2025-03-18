function onClick() {
    const burger = document.querySelector('.burger');
    burger.classList.toggle('open');
    burger.classList.toggle('rotated');
    burger.classList.toggle('open_burger');
    const background = document.querySelector('.container');
    background.classList.toggle('opened');

    const leaves = document.querySelector('#leaves');
    leaves.classList.toggle('none');

  }