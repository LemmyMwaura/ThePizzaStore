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
  navlink.addEventListener("click", linkAction)
})

// Scroll Sections Active link
// const sections = document.querySelectorAll("section[id]")
// function scrollActive() {
//   const scrollY = window.pageYOffset

//   sections.forEach((current) => {
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50
//     let sectionId = current.getAttribute("id")

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".navigation-menu a[href*=" + sectionId + "]")
//         .classList.add("active-link")
//     } else {
//       document
//         .querySelector(".navigation-menu a[href*=" + sectionId + "]")
//         .classList.remove("active-link")
//     }
//   })
// }

// window.addEventListener("scroll", scrollActive)

// Change Background header
function scrollHeader() {
  const nav = document.getElementById("header")
  if (this.scrollY >= 200) nav.classList.add("scroll-header")
  else nav.classList.remove("scroll-header")
}

window.addEventListener("scroll", scrollHeader)

// Show scrolltop
function scrollTop(scrolltopID, showClass) {
  const scrollTop = document.getElementById(scrolltopID)
  if (this.scrollY >= 560) scrollTop.classList.add(showClass)
  else scrollTop.classList.remove(showClass)
}

window.addEventListener("scroll", () => {
  scrollTop("scroll-top", "show-scrolltop")
})
window.addEventListener("scroll", () => {
  scrollTop("open-cart", "show-addtocart")
})

// Scroll Reveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
})

sr.reveal(
  `.hero-data, .hero-container,
            .about-data, .about-img,
            .services-content, .menu-content,
            .contact-data, .contact-button,
            .footer-content`,
  {
    interval: 200,
  }
)

// Business Logic
// Show Pizza counter
const currentPizza = document.querySelectorAll("#current-pizza")

currentPizza.forEach((pizza) => {
  let count = 0
  const minusBtn = pizza.children[3].children[0]
  const addBtn = pizza.children[3].children[2]
  const numberOfPizza = minusBtn.nextElementSibling

  addBtn.addEventListener("click", () => {
    count = count += 1
    numberOfPizza.textContent = count
  })

  minusBtn.addEventListener("click", () => {
    if (count <= 0) return
    count = count -= 1
    numberOfPizza.textContent = count
  })
})

// Pricing
function calcTotalPrice() {
  const currentPizza = document.querySelectorAll("#current-pizza")
  currentPizza.forEach((pizza) => {
    const price = pizza.children[4]
    const appendPrice = price.children[0]
    let totalPrice = 0

    // Size
    const small = pizza.children[5].children[0]
    const medium = pizza.children[5].children[2]
    const large = pizza.children[5].children[4]
    console.log(small, medium, large)

    // Crust
    const crispy = pizza.children[6].children[0]
    const stuffed = pizza.children[6].children[2]
    const gluttenfree = pizza.children[6].children[4]

    // Toppings
    const pepperoni = pizza.children[7].children[0]
    const mushroom = pizza.children[7].children[2]
    const extraCheese = pizza.children[7].children[4]
    console.log(pepperoni, mushroom, extraCheese)

    if (small.checked == true) {
      totalPrice = 200
    } else if (medium.checked == true) {
      totalPrice = 500
    } else if (large.checked == true) {
      totalPrice = 800
    }

    if (crispy.checked == true) {
      totalPrice += 50
    } else if (stuffed.checked == true) {
      totalPrice += 60
    } else if (gluttenfree.checked == true) {
      totalPrice += 80
    }

    if (pepperoni.checked == true) totalPrice += 20
    if (mushroom.checked == true) totalPrice += 40
    if (extraCheese.checked == true) totalPrice += 30

    const multiplier = document.getElementById("show-item").textContent

    // if (multiplier == 0) {
    //   totalPrice = totalPrice
    // } else {
    //   totalPrice = totalPrice * parseInt(multiplier)
    // }

    // appendPrice.textContent = totalPrice
    // console.log(totalPrice)
    // return totalPrice
  })
}

