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
