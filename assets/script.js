//DOM
const precioSpan = document.querySelector(".precio-inicial")
let total = document.querySelector(".valor-total")
const plus = document.querySelector("#btnplus")
const less = document.querySelector("#btnless")
let totalQuantity=document.querySelector(".cantidad")


//asignacion de variables
const precio = 400000
let totalValue=0
let quantity=0

//funciones
precioSpan.innerHTML = precio
total.innerHTML = totalValue
function addQuantity(){
    quantity = quantity + 1
    totalQuantity.innerHTML= quantity
    totalValue= quantity * precio
    total.innerHTML=totalValue
}
function removeQuantity(){
    if(totalQuantity.innerHTML<=0) {
        window.alert("No se permiten cantidades negativas")
        return
    }

    quantity = quantity - 1
    totalQuantity.innerHTML= quantity
    totalValue= quantity * precio
    total.innerHTML=totalValue
}
function addPrice(){
    totalValue=quantiy * precio
    total.innerHTML=totalValue
}



//eventos
plus.addEventListener("click",addQuantity)
less.addEventListener("click",removeQuantity)