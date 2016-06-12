import { Pizza } from './pizza.js'
import { PizzaList } from './pizzaList.js'
import { toppingsList } from './toppingsList.js'
import { ToppingsListAff } from './toppingsListAff.js'
import { ToppingsButtonsList } from './ToppingsButtonsList.js'
import { PizzaListApp } from './pizzaListApp.js'

var pizzaList = new PizzaList()
var actualPizza = null
var pizzaToppingsAff = new ToppingsListAff()
var toppingsButtonsList = new ToppingsButtonsList()
var pizzaListApp = new PizzaListApp(pizzaList)
var apps = [toppingsButtonsList, pizzaListApp]

pizzaListApp.init()

toppingsButtonsList.init(pizzaToppingsAff, pizzaList, pizzaListApp)
pizzaToppingsAff.init()

document.getElementById('addPizza').addEventListener('click', function (evt) {
    apps.forEach(app => app.hide())
    toppingsButtonsList.show()
    actualPizza = new Pizza()
    pizzaToppingsAff.toppingListSetPizza(actualPizza)
    toppingsButtonsList.setCurrentPizza(actualPizza)
    pizzaToppingsAff.toppingListMaj()
}, false)

document.getElementById('listPizza').addEventListener('click', event => {
    apps.forEach(app => app.hide())
    pizzaListApp.show()
}) 
