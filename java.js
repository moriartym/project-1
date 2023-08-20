const menuIcon = document.getElementById("menu");
const navList = document.getElementById("navigator");
const menuClose = document.getElementById("close");
const shadow = document.getElementById("main-container");
const buttonRead = document.getElementById("buttonread");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuClose.classList.toggle("active");
  shadow.classList.toggle("active");
  buttonRead.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuClose.classList.toggle("active");
  shadow.classList.toggle("active");
  buttonRead.classList.toggle("active");
});
