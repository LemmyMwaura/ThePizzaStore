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
