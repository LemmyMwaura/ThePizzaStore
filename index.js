// Toggle menu (Media querry)
function showMenu(toggleID, navID) {
  const toggle = document.getElementById(toggleID),
    nav = document.getElementById(navID)

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu")
    })
  }
}

showMenu("nav-toggle", "nav-menu")

// Remove mobile menu
const navLink = document.querySelectorAll(".nav-link")
function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}

navLink.forEach((navlink) => {
  navlink.addEventListener('click', linkAction)
})

// Scroll Sections Active link
const sections = document.querySelectorAll('section[id]')
function scrollActive(){
  const scrollY = window.pageYOffset 

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    let sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.navigation-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.navigation-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

// Change Background header
function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

// Show scrolltop
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top')
  if(this.scrollY >= 560) scrollTop.classList.add('show-scrolltop'); else scrollTop.classList.remove('show-scrolltop');
}

window.addEventListener('scroll', scrollTop)

class Pizza {
  constructor(size, price, toppings) {
    this.size = size
    this.price = price
    this.toppings = toppings
  }
}

// const pizza1 = new Pizza(small, 200, 'crispy')

// const pizza = {
//     size: [small, 'medium', 'large' ],
//     price:[200,300,400],
//     toppings:['cripsy', 'stuffed', 'glutten-free'],
// }

// console.log(pizza.size[2])
