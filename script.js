function onClick() {
    const rects = document.querySelectorAll('svg rect');

    rects.forEach((rect, index) => {
        if (index === 0) {
            rect.classList.toggle('rect-anim-1'); 
        } else if (index === 1) {
            rect.classList.toggle('rect-anim-2');
        } else if (index === 2) {
            rect.classList.toggle('rect-anim-3');
        }
    });

  }