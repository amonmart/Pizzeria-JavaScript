import { Pizza } from './pizza.js'
import { PizzaList } from './pizzaList.js'
import { toppingsList } from './toppingsList.js'
import { ToppingsListAff } from './toppingsListAff.js'
import { ToppingsButtonsList } from './ToppingsButtonsList.js'

var pizzaList = new PizzaList()
var actualPizza = null
var pizzaToppingsAff = new ToppingsListAff()
var toppingsButtonsList = new ToppingsButtonsList()

toppingsButtonsList.init(pizzaToppingsAff, pizzaList)
pizzaToppingsAff.init()

console.log(document.getElementById('addPizza'))
document.getElementById('addPizza').addEventListener('click', function (evt) {
    toppingsButtonsList.show()
    actualPizza = new Pizza()
    pizzaToppingsAff.toppingListSetPizza(actualPizza)
    toppingsButtonsList.setCurrentPizza(actualPizza)
    pizzaToppingsAff.toppingListMaj()
}, false)
