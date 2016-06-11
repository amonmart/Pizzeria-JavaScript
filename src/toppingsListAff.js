export class ToppingsListAff {
  constructor() {
    this.pizza
    this.listAff 
    this.divListAff = document.getElementById('toppingsListAff')
    this.listChildElement = []
  }

  init () {
    var context = this

    this.listAff = $('<ul id="toppingsListUL" class="list-group"></ul>')
    $(this.divListAff).append(this.listAff)
    var firstTopping = $('<li class="list-group-item">Drop your toppings here</li>')
    $(this.ListAff).append(firstTopping)
    this.listChildElement.push(firstTopping)
    document.getElementById('toppingsListAff').addEventListener('dragover', event => {
      event.preventDefault();
    }, false)

    document.getElementById('toppingsListAff').addEventListener('drop', event => {
      event.preventDefault();
      var data = event.dataTransfer.getData('topping');
      context.pizza.addTopping(data)
      context.toppingListMaj()
    })
  }

  

  toppingListSetPizza (pizza) {
    this.pizza = pizza
  }

  toppingListInit() {
    if(this.listChildElement.length !== 0){
      this.listChildElement.forEach(child => {
        this.listAff.remove(child)
      })
    }
  }

  toppingListMaj() {
    var context = this
    if (this.listChildElement.length !== 0){
      this.listChildElement.forEach(child => {
        $(child).remove()
      })
      this.listChildElement = []
    }

    var i = 0
    this.pizza.toppings.forEach(topping => {
      i++
      let toppingLi = $('<li id="li'+i+topping+'" class="list-group-item">'+topping+'  </li>')
      //toppingLi.innerHTML = topping
      $(this.listAff).append(toppingLi)
       document.getElementById('li'+i+topping).addEventListener('click', event => {
        context.pizza.removeTopping(topping)
        context.toppingListMaj()
      })
      this.listChildElement.push(toppingLi)
    })
  }
}
