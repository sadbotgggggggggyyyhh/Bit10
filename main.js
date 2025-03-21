const menuIcon = document.querySelector(".navMenu");
const navBar = document.querySelector(".navLinks")

menuIcon.addEventListener('click', () =>{
  navBar.classList.toggle('active');
})