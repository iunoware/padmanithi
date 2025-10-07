AOS.init();
// hero section
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

  // Enhanced responsive card width calculation
  const cardWidth = getCardWidth();
  slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
}

function getCardWidth() {
  const card = cards[0];
  const cardStyle = window.getComputedStyle(card);
  const cardWidth = card.offsetWidth;
  const marginLeft = parseInt(cardStyle.marginLeft) || 0;
  const marginRight = parseInt(cardStyle.marginRight) || 0;
  return cardWidth + marginLeft + marginRight;
}

// Initial setup
window.addEventListener("load", () => {
  cards[currentIndex].classList.add("active");
});

// Handle window resize to recalculate positions
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Recalculate slider position after resize
    const cardWidth = getCardWidth();
    slider.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }, 250);
});
// for auto slide functionality
// Auto-slide every 3 seconds
let autoSlideInterval = setInterval(() => {
  slide(1); // move to the next card
}, 7000);

// Reset auto-slide timer when user clicks or swipes
function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    slide(1);
  }, 3000);
}

// next/prev buttons
document.querySelectorAll(".next-btn, .prev-btn").forEach((btn) => {
  btn.addEventListener("click", resetAutoSlide);
});

// Swipe end — resume auto-slide
slider.addEventListener("touchend", resetAutoSlide);
//  auto slide ends

// Touch/swipe support for mobile devices
let startX = 0;
let startY = 0;
let isDragging = false;

slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
  isDragging = true;
});

slider.addEventListener("touchmove", (e) => {
  if (!isDragging) return;

  const currentX = e.touches[0].clientX;
  const currentY = e.touches[0].clientY;
  const diffX = Math.abs(currentX - startX);
  const diffY = Math.abs(currentY - startY);

  // If horizontal swipe is more significant than vertical, prevent scrolling
  if (diffX > diffY) {
    e.preventDefault();
  }
});

// script for whatsapp form

const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from refreshing

  const fullName =
    document.getElementById("firstName").value +
    " " +
    document.getElementById("lastName").value;
  const email = document.getElementById("emailAddress").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  let phoneNumber = "918220442273";
  // let phoneNumber = "916381246377"; //not on whatsapp

  // the raw message
  let rawMessage = `Hi I'm ${fullName},
Email: ${email},
and I would like to discuss about ${subject}

${message}`;

  // Encode it properly
  let whatsappMessage = encodeURIComponent(rawMessage);

  let url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  window.open(url, "_blank");
});
// for enquiryBTn
const enquiryBTn = document.getElementById("enq-btn");
const hero = document.getElementById("hero");

// window.addEventListener("scroll", () => {
//   const heroBottom = hero.offsetTop + hero.offsetHeight;
//   if (window.scrollY > heroBottom) {
//     enquiryBTn.style.zIndex = "1000";
//   } else {
//     enquiryBTn.style.zIndex = "-1000";
//   }
// });

// enquiry button 2
function openPopup() {
  let phoneIcon = document.querySelector(".phone-icon");
  let whatsappIcon = document.querySelector(".whatsapp-icon");
  // phoneIcon.style.top = "38%";

  if (phoneIcon.style.top === "50%") {
    phoneIcon.style.top = "38%";
    whatsappIcon.style.top = "70%";
  } else {
    phoneIcon.style.top = "50%";
    whatsappIcon.style.top = "50%";
  }
}
