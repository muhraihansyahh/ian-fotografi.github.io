//Toggle Class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika jasa menu di klik
document.querySelector("#jasa-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik di luar sidebar untuk menghilangkan area menu
const jasa = document.querySelector("#jasa-menu");

document.addEventListener("click", function (e) {
  if (!jasa.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
