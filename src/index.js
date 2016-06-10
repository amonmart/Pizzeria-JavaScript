import { Pizza } from './pizza.js'
import { PizzaList } from './pizzaList.js'
import { toppingsList } from './toppingsList.js'
import { ToppingsListAff } from './toppingsListAff.js'

var pizzaList = new PizzaList()
var actualPizza = null
var pizzaToppingsAff = new ToppingsListAff()

var toppingsButtons = document.getElementById('toppingsList')
Object.keys(toppingsList).forEach(topping => {

  const toppingButton = document.createElement('button')
  toppingButton.innerHTML = topping

  toppingButton.addEventListener('click', evt => {
    actualPizza.addTopping(topping)
    pizzaToppingsAff.toppingListMaj()
    console.log(actualPizza)
  })

  toppingsButtons.appendChild(toppingButton)

})

document.getElementById('addPizza').addEventListener('click', function (evt) {
  document.getElementById('toppingsList').style.visibility = 'visible'
  actualPizza = new Pizza('Pizza yolo !')
  pizzaToppingsAff.toppingListSetPizza(actualPizza)
  pizzaToppingsAff.toppingListMaj()
  }, false)

document.getElementById('savePizza').addEventListener('click', function (evt) {
  actualPizza.savePizza(pizzaList)
  pizzaToppingsAff.toppingListInit()
  }, false)
