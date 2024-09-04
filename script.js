// document.addEventListener("scroll", function() {
//   const scrollPosition = window.scrollY;
//   const windowHeight = window.innerHeight;
//   const resumeSection = document.getElementById("resume");
//   const contactSection = document.getElementById("contact");

//   // Show Resume section when scrolled halfway
//   if (scrollPosition > windowHeight / 2) {
//     resumeSection.classList.add("show");
//   } else {
//     resumeSection.classList.remove("show");
//   }

//   // Show Contact section when scrolled 75% down
//   if (scrollPosition > windowHeight * 0.75) {
//     contactSection.classList.add("show");
//   } else {
//     contactSection.classList.remove("show");
//   }
// });
// Smooth scroll behavior for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var animationContainer = document.querySelector('.animation-container');
  animationContainer.classList.add('animate-once');
});