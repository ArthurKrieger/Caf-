var eat = document.getElementById("eat");
var drinks = document.getElementById("drinks");
var tabDrinks = document.getElementById("botao_drinks");
var tabEat = document.getElementById("botao_eat");

drinks.classList.add("hide");
tabEat.classList.add("active");

function show_drink() {
    eat.classList.add("hide");
    drinks.classList.remove("hide");
    tabDrinks.classList.add("active");
    tabEat.classList.remove("active");
}

function show_eat() {
    eat.classList.remove("hide");
    drinks.classList.add("hide");
    tabDrinks.classList.remove("active");
    tabEat.classList.add("active");
}