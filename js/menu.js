const menuBtn = document.querySelector(".burger-menu")
const closeBtn = document.querySelector(".close-button")
const navLinks = document.querySelectorAll(".nav-link");


menuBtn.addEventListener('click', () => {
  document.body.classList.add("is-menu-open")
}) 

 closeBtn.addEventListener('click', () => {
   document.body.classList.remove("is-menu-open")
 })


navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("is-menu-open");
  });
});