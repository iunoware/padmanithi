// let mq = window.matchMedia("(max-width: 1000px)");

// if (mq.matches) {
//   document.querySelector(".who-we-serve-title").innerHTML = `Who we serve`;
// }
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

// for closing navbar when clicked anywhere on the page
document.addEventListener("click", function (event) {
  const navbar = document.querySelector(".navbarNav");
  const toggler = document.querySelector(".navbar-toggler");

  const isClickInsideNavbar = navbar.contains(event.target);
  const isClickOnToggler = toggler.contains(event.target);

  // Close if clicking outside
  if (!isClickInsideNavbar && !isClickOnToggler && navbar.classList.contains("show")) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
    bsCollapse.hide();
  }
});

// navbar close on scroll
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbarNav");

  if (!navbar) return; // safety

  if (navbar.classList.contains("show") && Math.abs(window.scrollY - lastScrollY) > 10) {
    const bsCollapse = bootstrap.Collapse.getInstance(navbar);
    bsCollapse.hide();
  }

  lastScrollY = window.scrollY;
});
