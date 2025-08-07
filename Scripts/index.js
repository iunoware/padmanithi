// testimonial starts
// document.addEventListener("DOMContentLoaded", () => {
//   let currentSlideIndex = 0;
//   const slides = document.querySelectorAll(".testimonial-slide");
//   const dots = document.querySelectorAll(".testimonial-dot");
//   const totalSlides = slides.length;

//   function showSlide(n) {
//     if (n >= totalSlides) n = 0;
//     if (n < 0) n = totalSlides - 1;
//     currentSlideIndex = n;

//     slides.forEach((slide) => slide.classList.remove("active"));
//     // dots.forEach((dot) => dot.classList.remove("active"));

//     slides[currentSlideIndex].classList.add("active");
//     // dots[currentSlideIndex].classList.add("active");
//   }

//   function changeSlide(direction) {
//     showSlide(currentSlideIndex + direction);
//   }

//   function currentSlide(n) {
//     showSlide(n);
//   }

//   let autoSlideInterval;

//   function startAutoSlide() {
//     autoSlideInterval = setInterval(() => {
//       showSlide(currentSlideIndex + 1);
//     }, 5000);
//   }

//   function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
//   }

//   showSlide(currentSlideIndex);
//   startAutoSlide();

//   // button listeners
//   document.getElementById("prevBtn").addEventListener("click", () => changeSlide(-1));
//   document.getElementById("nextBtn").addEventListener("click", () => changeSlide(1));

//   // Hover listeners
//   const testimonialSection = document.querySelector(".testimonial-section");
//   testimonialSection.addEventListener("mouseenter", stopAutoSlide);
//   testimonialSection.addEventListener("mouseleave", startAutoSlide);

//   // Touch swipe
//   let touchStartX = 0;
//   let touchEndX = 0;

//   testimonialSection.addEventListener("touchstart", (e) => {
//     touchStartX = e.changedTouches[0].screenX;
//   });

//   testimonialSection.addEventListener("touchend", (e) => {
//     touchEndX = e.changedTouches[0].screenX;
//     if (touchEndX < touchStartX - 50) changeSlide(1);
//     if (touchEndX > touchStartX + 50) changeSlide(-1);
//   });
// });
// testimonial ends

// hero seciton card
 const slider = document.getElementById("cardSlider");
  const cards = document.querySelectorAll(".card-item");
  let currentIndex = 0;

  function slide(direction) {
    // Remove current active
    cards[currentIndex].classList.remove("active");

    currentIndex += direction;
    if (currentIndex < 0) currentIndex = cards.length - 1;
    if (currentIndex >= cards.length) currentIndex = 0;

    // Add active class to new card
    cards[currentIndex].classList.add("active");

    // Scroll to correct position
    const cardWidth = cards[0].offsetWidth + 20;
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }

  // Initial setup
  window.addEventListener("load", () => {
    cards[currentIndex].classList.add("active");
  });
