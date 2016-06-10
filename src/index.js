import { Pizza } from './pizza.js'
import { PizzaList } from './pizzaList.js'
import { toppingsList } from './toppingsList.js'

var pizzaList = new PizzaList()
var actualPizza = null

var toppingsButtons = document.getElementById('toppingsList')
Object.keys(toppingsList).forEach(topping => {

  const toppingButton = document.createElement('button')
  toppingButton.innerHTML = topping

  toppingButton.addEventListener('click', evt => {
    actualPizza.addTopping(topping)
    console.log(actualPizza)
  })

  toppingsButtons.appendChild(toppingButton)

})

toppingsButtons.style.visibility = 'hidden'
document.getElementById('addPizza').addEventListener('click', function (evt) {
  document.getElementById('toppingsList').style.visibility = 'visible'
  actualPizza = new Pizza('Pizza yolo !')
  }, false)

document.getElementById('savePizza').addEventListener('click', function (evt) {
  document.getElementById('toppingsList').style.visibility = 'hidden'
  actualPizza.savePizza(pizzaList)
  }, false)

/*var pizzaList = new PizzaList()
document.getElementById('toppingList').style.visibility = 'hidden'
var actualPizza

function showToppings () {
  document.getElementById('toppingList')
}

var button = document.getElementById('addPizza')
.addEventListener('click', function (evt) {
  document.getElementById('toppingList').style.visibility = 'visible'
  actualPizza = new Pizza()
}, false)



var buttonEggs = document.getElementById('addEgg')
  .addEventListener('click', function (evt) {
    actualPizza.addTopping('eggs')
    window.alert('you added some eggs !')
  })

  var buttonEggs = document.getElementById('addHam')
  .addEventListener('click', function (evt) {
    actualPizza.addTopping('ham')
    window.alert('you added some ham !')
  })

  var buttonEggs = document.getElementById('addApple')
  .addEventListener('click', function (evt) {
    actualPizza.addTopping('apple')
    window.alert('you added some apple !')
  })

  var buttonEggs = document.getElementById('savePizza')
  .addEventListener('click', function (evt) {
    document.getElementById('toppingList').style.visibility = 'hidden'
    actualPizza.savePizza(pizzaList)
  })


/*
pizzaList.addPizza(
  new Pizza('Margherita')
    .addTopping('tomato sauce')
    .addTopping('mozzarella')
)
.then(console.log('Pizza bien ajoutée'))

pizzaList.addPizza(
  new Pizza('Funghi')
    .addTopping('tomato sauce')
    .addTopping('mozzarella')
    .addTopping('mushrooms')
)
.then(console.log('Pizza bien ajoutée'))
console.log(pizzaList.pizzas)
console.log('Lancement cuisson')

pizzaList.pizzas[0]
  .cook(2000)
  .then(() => {
    console.log('Bing ! Pizza cuite')
  })
  .catch(err => {
    console.log(err)
  })

setTimeout(function () {
  pizzaList.pizzas[1]
    .cook(10000)
    .then(() => {
      console.log('Bing ! Pizza cuite')
    })
    .catch(err => {
      console.log(err)
    })
}, 1000)

setTimeout(function () {
  pizzaList.pizzas[0]
    .cook(1000)
    .then(() => {
      console.log('Bing ! Pizza cuite')
    })
    .catch(err => {
      console.log(err)
    })
}, 2500)



let cacheOfUsers = null


function getUsers () {
  // si cache existe l'utiliser
  if (cacheOfUsers) {
    console.log('Je passe par le cache')
    console.log(cacheOfUsers)
    return Promise.resolve(cacheOfUsers)
  }
  // sinon faire la requête et mettre en cache
  return fetch('user1.json')
    // tranforme la réponse http en json
    .then((response) => {
      console.log('réalisation de la requete')
      if (!response.ok) throw Error(response.status)
      return response.json()
    })
    .then(users => {
      cacheOfUsers = users
      return users
    })
}


getUsers()
  .then(users => {
    console.log('1', users)
  })

setTimeout(function () {
  getUsers()
    .then(users => {
      console.log('2', users)
    })
}, 1000)

function getAvg (array) {
  return array.reduce((acc, item, index, array) => acc + item / array.length, 0)
}


let user1 = fetch('user1.json').then(reponse => { return reponse.json() })
let user2 = fetch('user2.json').then(reponse => { return reponse.json() })

Promise.all([user1, user2])
  .then(users => { return users.map(user => user.age) })
  .then(ages => { return getAvg(ages) })
  .then(avg => console.log('moyenne des ages : ' + avg))


fetch('users.json')
  .then(reponse => {
    if (!reponse.ok) { throw Error(reponse.status) }
    return reponse.json()
  })
  .then(users => { return users.map(user => user.age) })
  .then(ages => { return getAvg(ages) })
  .then(avg => console.log(avg))
  .catch(err => console.log(err))

let pizzas = new PizzaList()

var rei = new Pizza('Reine')

rei.addTopping('ham')
  .addTopping('mushrooms')
  .addTopping('artichoke')
  .addTopping('green olives')
  .removeToppings('egg')

var pom = new Pizza('Pomme')

pom.addTopping('apple')
  .addTopping('egg')
  .addTopping('orange')
  .addTopping('egg')

console.log(rei)

pizzas.addPizza(rei)
pizzas.addPizza(pom)

console.log(pizzas)


let pizzasFound = pizzas.findPizzaByTopping('ham')

console.log(pizzasFound)

var isEven = function (v) {
  return v % 2 === 0
}

let toppingList = rei.toppings2string('fr')
console.log(toppingList)

//Entrainement sur les reduce
var array = [1, 2, 3, 4, 5, 6]

var fil = array.reduce(function (accu, item, index, array) {
  if (isEven(item)) {
    accu.push(item)
  }
  return accu
}, [])

console.log(fil)
*/