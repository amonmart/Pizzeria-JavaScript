export class ToppingsListAff {
  constructor() {
    this.pizza
    this.listAff = document.createElement('UL')
    this.divListAff = document.getElementById('toppingsListAff')
    this.listChildElement = []
  }

  toppingListSetPizza (pizza) {
    this.pizza = pizza
  }

  toppingListInit() {
    if(this.listChildElement.length !== 0){
      Array.prototype.slice.call(this.listChildElement).forEach(child => {
        this.listAff.removeChild(child)
      })
    }
    this.divListAff.appendChild(this.listAff)
  }

  toppingListMaj() {
    console.log(this.pizza.toppings)

    if(this.listChildElement.length !== 0){
      Array.prototype.slice.call(this.listChildElement).forEach(child => {
        this.listAff.removeChild(child)
      })
    }

    this.pizza.toppings.forEach(topping => {
      const toppingLi = document.createElement('LI')
      toppingLi.innerHTML = topping
      this.listAff.appendChild(toppingLi)
      this.listChildElement = this.listAff.childNodes
    })
  }
}
