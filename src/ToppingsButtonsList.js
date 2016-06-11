import { toppingsList } from './toppingsList.js'
import { ToppingsListAff } from './toppingsListAff.js'

export class ToppingsButtonsList {
    constructor() {
        this.div = document.getElementById('toppingsButtonsList')
        this.container = document.getElementById('containerToppingListAff')
        this.currentPizza
        this.toppingListAff
        this.alert = null
    }
    setCurrentPizza(pizza) {
        this.currentPizza = pizza
    }

    show() {
        $(this.container).collapse("show")
    }

    hide() {
        $(this.container).collapse('hide')
    }

    init(toppingListAff, pizzaList) {
        this.toppingListAff = toppingListAff
        var context = this

        //Initialisation de la liste de toppingsButtonsList


        //Initialisation du bouton savePizza
        document.getElementById('savePizza').addEventListener('click', function (evt) {
            var pizzaName = document.getElementById('pizzaNameTextArea').value
            if (pizzaName === "") {
                $(document.body).append($('<div class=" alert alert-danger">Enter a pizza name</div>'))
            } else {
                context.hide()
                context.currentPizza.setName(pizzaName) 
                context.currentPizza.savePizza(pizzaList)
            }

            
        }, false)

        //Initialisation des boutons d'ingredients
        $(this.container).collapse('toggle')
        Object.keys(toppingsList).forEach(topping => {
            var button = $('<button id="'+topping+'"class="btn btn-primary btn-block" draggable="true">' + topping + '</button>')
            $(this.div).append(button)

            document.getElementById(topping).addEventListener('dragstart', event => {
                event.dataTransfer.setData('topping', event.target.id)
            })

            button.on('click', event => {
                this.currentPizza.addTopping(topping)
                this.toppingListAff.toppingListMaj()
            })
        })
    }
    
}
