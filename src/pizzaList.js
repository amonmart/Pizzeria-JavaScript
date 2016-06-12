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
    return this.db.pizzas.toArray()
  }

  findPizzaByTopping (topping) {
    let retour = this.pizzas.filter(p => p.isInPizza(topping))
    return retour
  }

  toHtml () {
    return this.getPizzas()
      .then(pizzas => pizzas.map(json => new Pizza(json)))
      .then(pizzas => pizzas.map(pizza => pizza.toHtml()))
      .then(pizzaRows => `
        <tr> 
          ${pizzaRows.join('')}
        </tr>
      `)
  }
}
