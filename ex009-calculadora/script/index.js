const entrada1 = window.prompt("Informe o primeiro número:");
const entrada2 = window.prompt("Informe o segundo número:");

const x = parseFloat(entrada1);
const y = parseFloat(entrada2);

const soma = x + y;
const subtraçao = x - y;
const multiplicação = x * y;
const divisão = x / y;

window.alert(
    "Resultados:\n" +
    "\n Soma: " + soma +
    "\n Subtração: " + subtraçao +
    "\n Multiplicação" + multiplicação +
    "\n Divisão: " + divisão

)