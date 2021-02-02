function show_drink() {
    document.getElementById("eat").style.display = "none";
    document.getElementById("drinks").style.display = "block";
    document.getElementById("botao_drinks").className = "tab active"
    document.getElementById("botao_eat").className = "tab "



}

function show_eat() {
    document.getElementById("eat").style.display = "block";
    document.getElementById("drinks").style.display = "none";
    document.getElementById("botao_drinks").className = "tab "
    document.getElementById("botao_eat").className = "tab active"



}