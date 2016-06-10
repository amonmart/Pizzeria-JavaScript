export class ToppingsListAff {
  constructor() {
    this.pizza
    this.listAff = document.createElement('UL')
    this.divListAff = document.getElementById('toppingsListAff')
  }

  toppingListSetPizza (pizza) {
    this.pizza = pizza
  }

  toppingListInit() {
    this.divListAff.appendChild(this.listAff)
  }

  toppingListMaj() {
    console.log(this.pizza.toppings)

    this.pizza.toppings.forEach(topping => {
      const toppingLi = document.createElement('LI')
      toppingLi.innerHTML = topping
      this.listAff.appendChild(toppingLi)
    })


  }
}
