let small = document.querySelector('.small')

class Pizza {
    constructor(size, price, toppings) {
      this.size = size
      this.price= price
      this.toppings = toppings
    }
}


const pizza1 = new Pizza(small, 200, 'crispy')


// const pizza = {
//     size: [small, 'medium', 'large' ],
//     price:[200,300,400],
//     toppings:['cripsy', 'stuffed', 'glutten-free'],
// }

// console.log(pizza.size[2])
