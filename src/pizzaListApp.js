import { Pizza } from './pizza.js'

export class PizzaListApp {
    constructor (pizzaList) {
        this.container = document.getElementById('containerPizzaListApp')
        this.table = document.getElementById('pizzaListTable')
        this.pizzaList = pizzaList
        this.cookTrList = []
        this.cookBtnList = []
    }

    init () {
        $(this.container).collapse('toggle')
        this.pizzaListMaj()

        //Button cook all Pizza
        document.getElementById('cookAllPizzaBtn').addEventListener('click', event => {
            this.pizzaList.getPizzas()
            .then(pizzas => pizzas.map(json => new Pizza(json)))
            .then(pizzas => console.log(pizzas))
        })
    }

    show() {
        $(this.container).collapse('show')
    }

    hide() {
        $(this.container).collapse('hide')
    }

    tableAppendTr (pizza) {
        if (pizza.status === 0) {
            $(this.table).append($('<tr id="tr'+pizza.id+'"><td>'+pizza.name+'</td><td>'+pizza.toppings2string()+'</td><td><button id="btn'+pizza.id+'" class="btn btn-success">cook</button></td></tr>'))
            this.cookBtnList.push(document.getElementById('btn'+pizza.id))
            document.getElementById('btn'+pizza.id).addEventListener('click' , event => {
            	pizza.cook()
                .then(pizza => pizza.updatePizza(this.pizzaList))
                .then(p => this.pizzaListMaj())

            })
        }
        if (pizza.status === 1){
           $(this.table).append($('<tr id="tr'+pizza.id+'"><td>'+pizza.name+'</td><td>'+pizza.toppings2string()+'<td>En cour</td></tr>')) 
        }
        if (pizza.status === 2){
           $(this.table).append($('<tr id="tr'+pizza.id+'"><td>'+pizza.name+'</td><td>'+pizza.toppings2string()+'<td>Pizza cuite</td></tr>')) 
        }
    }

    pizzaListMaj () {
        this.cookTrList.forEach(tr => this.table.removeChild(tr))
        this.cookTrList = []

        this.pizzaList.getPizzas()
        .then(pizzas => pizzas.map(json => new Pizza(json)))
        .then(pizzas => pizzas.map(pizza => {
            this.tableAppendTr(pizza)
            this.cookTrList.push(document.getElementById('tr'+pizza.id))
        }))
    }
}

