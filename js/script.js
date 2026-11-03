// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
// ketika hamburger menu di klik
hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
});
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

bgMusic.volume = 0.5;

window.addEventListener("load", () => {
  bgMusic
    .play()
    .then(() => {
      musicToggle.textContent = "♫ Matikan Musik";
    })
    .catch(() => {
      musicToggle.textContent = "♫ Putar Musik";
    });
});

musicToggle.addEventListener("click", async () => {
  if (bgMusic.paused) {
    try {
      await bgMusic.play();
      musicToggle.textContent = "♫ Matikan Musik";
    } catch (error) {
      musicToggle.textContent = "♫ Putar Musik";
    }
  } else {
    bgMusic.pause();
    musicToggle.textContent = "♫ Putar Musik";
  }
});
