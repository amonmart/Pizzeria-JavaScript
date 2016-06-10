import {toppingsList as authorizedToppings} from './toppingsList.js'

export class Pizza {
  constructor (name) {
    this.name = name
    this.toppings = []
    this.status = 0
  }

  setName (name) {
    this.name = name
  }

  savePizza (pizzaList) {
    return pizzaList.db.pizzas.add(this)
  }

  addTopping (topping) {
    // only authorized toppings
    if (Object.keys(authorizedToppings).indexOf(topping) === -1) return this

    // 2 identical toppings max
    if (this.toppings.filter(t => t === topping).length > 1) return this

    this.toppings.push(topping)

    return this
  }

  isInPizza (topping) {
    if (this.toppings.indexOf(topping) !== -1) return true
  }

  reduceList (acc, topping) {
    acc = acc + topping
    return acc
  }

  translate (topping, lang = 'en') {
    return authorizedToppings[topping][lang] || topping
  }

  toppings2string (lang = 'en') {
    return this.toppings

      // uniqs
      .reduce((acc, topping) => {
        if (acc.indexOf(topping) === -1) acc.push(topping)
        return acc
      }, [])

      // topping (translated (nb))
      .map(topping => {
        const size = this.toppings.filter(item => item === topping).length
        if (size > 1) return `${this.translate(topping, lang)} x${size}`
        return `${this.translate(topping, lang)}`
      })
      .join(', ')
  }

  cook (time = 1000) {
    if (this.status === 0) {
      this.status = 1
      return new Promise(resolve => {
        setTimeout(() => {
          this.status = 2
          resolve()
        }, time)
      })
    } else if (this.status === 1) {
      return Promise.reject('Pizza en cours de cuisson')
    } else {
      return Promise.reject('Pizza déjà cuite')
    }
  }

  removeToppings (Toppings) {
    this.toppings = this.toppings.filter(function (item) {
      return item !== Toppings
    })
  }
}
