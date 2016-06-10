export class ToppingsListAff {
  constructor() {
    this.pizza
    this.listAff = document.getElementById('toppingsListTableBody')
    this.divListAff = document.getElementById('toppingsListAff')
  }

  toppingListSetPizza (pizza) {
    this.pizza = pizza
  }

  toppingListMaj() {
    console.log(this.pizza.toppings)

    this.pizza.toppings.forEach(topping => {
      const toppingLi = document.createElement('TR')
      toppingLi.innerHTML = topping
      this.listAff.appendChild(toppingLi)
    })


  }
