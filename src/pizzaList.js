import Dexie from 'dexie'

export class PizzaList {
  constructor () {
    this.db = new Dexie('pizzeria')
    this.db.version(1).stores({
      pizzas: '++id,name'
    })
    this.db.open()
    this.pizzas = []
  }

  addPizza (pizza) {
    return this.db.pizzas.add(pizza)
  }

  getPizzas () {
    return new Promise(resolve => { return resolve.pizzas })
  }

  findPizzaByTopping (topping) {
    let retour = this.pizzas.filter(p => p.isInPizza(topping))
    return retour
  }
}
