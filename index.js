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
            .footer-content, .form`,
  {
    interval: 200,
  }
)

// Cart fucnctionality
const openCart = document.getElementById("open-cart")
openCart.addEventListener("click", () => {
  const cart = document.getElementById("cart")
  cart.classList.toggle("show-cart")
})

// Business Logic
const form = document.getElementById("form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  validatecart()
  calcItemPrice()
})

function validatecart() {
  // Size
  const small = document.getElementById("small")
  const medium = document.getElementById("medium")
  const large = document.getElementById("large")

  // Crust
  const crispy = document.getElementById("crispy")
  const stuffed = document.getElementById("stuffed")
  const gluttenfree = document.getElementById("gluttenfree")

  // Toppings
  const pepperoni = document.getElementById("topping1")
  const mushroom = document.getElementById("topping2")
  const extraCheese = document.getElementById("topping3")

  if (
    small.checked != true &&
    medium.checked != true &&
    large.checked != true
  ) {
    alert(`Kindly select Pizza size`)
  } else if (
    crispy.checked != true &&
    stuffed.checked != true &&
    gluttenfree.checked != true
  ) {
    alert(`Kindly select Pizza crust`)
  } else {
    addToCart()
  }
}

// Add / Minus quantity
function incrementCount() {
  let count = 0
  const minusBtn = document.getElementById("minus")
  const addBtn = document.getElementById("add")
  const numberOfPizza = document.getElementById("show-item")

  addBtn.addEventListener("click", () => {
    count = count += 1
    numberOfPizza.textContent = count
  })

  minusBtn.addEventListener("click", () => {
    if (count <= 0) return
    count = count -= 1
    numberOfPizza.textContent = count
  })
}

incrementCount()

function calcItemPrice() {
  const appendPrice = document.getElementById("append-price").children[0]
  let totalPrice = 0
  // Size
  const small = document.getElementById("small")
  const medium = document.getElementById("medium")
  const large = document.getElementById("large")

  // Crust
  const crispy = document.getElementById("crispy")
  const stuffed = document.getElementById("stuffed")
  const gluttenfree = document.getElementById("gluttenfree")

  // Toppings
  const pepperoni = document.getElementById("topping1")
  const mushroom = document.getElementById("topping2")
  const extraCheese = document.getElementById("topping3")

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

  const multiplier = parseInt(document.getElementById("show-item").textContent)

  if (multiplier <= 0) {
    totalPrice = 0
  } else {
    totalPrice = totalPrice * parseInt(multiplier)
  }

  appendPrice.textContent = totalPrice
  return totalPrice
}

// Refresh Total Cointer
radios = document.querySelectorAll('input[type="radio"]')
checks = document.querySelectorAll('input[type="checkbox"]')
radios.forEach((radio) => {
  radio.addEventListener("change", calcItemPrice)
})
checks.forEach((check) => {
  check.addEventListener("change", calcItemPrice)
})

// Append to Cart
const mainContainer = document.getElementById("cart-item")
function addToCart() {
  const getSize = () => {
    if (document.getElementById("small").checked) return "small"
    else if (document.getElementById("medium").checked) return "medium"
    else if (document.getElementById("large").checked) return "large"
  }

  const getCrust = () => {
    if (document.getElementById("crispy").checked) return "crispy"
    else if (document.getElementById("stuffed").checked) return "stuffed"
    else if (document.getElementById("gluttenfree").checked)
      return "gluttenfree"
  }

  const selectedToppings = document.querySelectorAll(
    'input[name="toppings"]:checked'
  )
  let toppings = []
  selectedToppings.forEach((topping) => {
    toppings.push(topping)
  })

  let imgSrc = [
    "./Images/Pizza's/pizza2.png",
    "./Images/Pizza's/pizza3.png",
    "./Images/Pizza's/pizza4.png",
    "./Images/Pizza's/pizza5.png",
    "./Images/Pizza's/pizza6.png",
    "./Images/Pizza's/pizza7.png",
    "./Images/Pizza's/pizza8.png",
    "./Images/Pizza's/pizza9.png",
    "./Images/Pizza's/pizza10.png",
  ]

  let randomNumber = Math.floor(Math.random() * 9)
  let randonImgSrc = imgSrc[randomNumber]
  const quantity = document.getElementById("show-item").textContent
  let total = document.getElementById("append-price").children[0].textContent
  let itemContainer = document.createElement("div")
  mainContainer.append(itemContainer)
  itemContainer.innerHTML = `
  <img class="cart-img" src="${randonImgSrc}" alt="">
  <h5 class="cart-price">Ksh ${total}</h5>
  <h5 class="cart-size">${getSize()}</h5>
  <h5 class="cart-quantity">${quantity}</h5>
  <h5 class="cart-crust">${getCrust()}</h5>
  <ul class="cart-toppings">${toppings.map((i) => {
    return i.value
  })}
      <li></li>
      <li></li>
      <li></li>
  </ul>
</div>
  `
  totalValueOfCart()
}

function totalValueOfCart() {
  const totalValueOfItems = document.getElementById("total-cart")
  const prices = document.querySelectorAll(".cart-price")
  let sum = 0
  prices.forEach((price) => {
    let quantity = price.parentElement.children[3].textContent
    sum += parseInt(price.textContent.replace("Ksh", "")) * quantity
  })
  totalValueOfItems.textContent = sum
}

const checkout = document.getElementById("checkout")
checkout.addEventListener("click", () => {
  const delivery = document.querySelector("#delivery")
  if (delivery.checked == true) {
    addDeliPrice()
    prompt(
      "Enter your Location NB: All deliveries cost 200Ksh and we only deliver within Nairobi"
    )
    alert("Order will be delivered once you proceed to checkout")
  } else {
    addDeliPrice()
    alert("Your can pick up your pizza in an hour after checkout")
  }
})

function addDeliPrice() {
  let total = document.querySelector("#total-cart")
  const delivery = document.querySelector("#delivery")
  if (delivery.checked == true){
    total.textContent = parseInt(total.textContent) + 200
  }

  else{
     total.textContent = parseInt(total.textContent) - 200
  }
}
