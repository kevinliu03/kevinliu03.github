document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// window.addEventListener('scroll', function() {
//   const intro = document.querySelector('.intro');
//   const description = document.querySelector('.description');
//   const image = document.querySelector('.image');

//   const scrollPosition = window.scrollY;

//   intro.style.transform = `translateX(-${scrollPosition * 1}px)`;
//   description.style.transform = `translateX(-${scrollPosition * 1}px)`;
//   image.style.transform = `translateX(${scrollPosition * 1.5}px)`;
// });

function changeImage() {
  const imageElement = document.querySelector('.image img');
  if (imageElement.src.endsWith('nightBackground.JPG')) {
    imageElement.src = 'lightBackground.JPG';
  } else {
    imageElement.src = 'nightBackground.JPG';
  }
}
