let mq = window.matchMedia("(max-width: 1000px)");

if (mq.matches) {
  document.querySelector(
    ".who-we-serve-title"
  ).innerHTML = `Who we serve`;
}
