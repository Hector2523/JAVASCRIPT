alert("Cálculos :)");

let a, b, c;
a = 5;
b = 6;
c = 7;

function verResultado() {
    if (a == 5)   {
        document.getElementById("texto").innerHTML = ("True");
    } else {
        document.getElementById("texto").innerHTML = ("False");
    }
}

function limparResultado() {

    var limpar = true;

    if (limpar) {
        document.getElementById("texto").innerHTML = "";
    }
}