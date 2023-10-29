var produtos = new Array();
const button = document.getElementById("button");
var input = document.getElementById("produto");
var lista = document.querySelector(".produtos").innerHTML = "<ul>";

button.addEventListener("click", function() {

    if (input.value === " " || input.value === "") {
        alert("Digite um dado válido");
        input.value = "";
    } else {
        produtos.push(input.value);
        input.value = "";
        return adicionar()
    }
});

button.addEventListener("keydown", function(event) {
    if (input.value === " ") {
        alert("Digite um dado válido");
        input.value = "";
    } else if (event.key === "Enter") {
        produtos.push(input.value);
        input.value = "";
        adicionar();
    }
    
});

function adicionar() {
    var listaHTML = "<ul>";
    for (let i = 0; i < produtos.length; i++) {
        listaHTML += "<li>" + produtos[i] + "</li>";
    }
    listaHTML += "</ul>";
    document.querySelector(".produtos").innerHTML = listaHTML;
}

function limparLista() {
    document.querySelector(".produtos").innerHTML = "";
    produtos = new Array();
}

