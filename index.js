const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-list')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-list-item')
  .forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  }))