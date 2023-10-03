const numero = prompt("Olá eu sou um robô da tabuada!" + "\nInforme o número que você deseja calcular a tábuada");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
    resultado += " -> " + numero +" * " + fator + " = " + (numero*fator) + "\n";
}

alert("Resultado da tabuada de " + numero + " :\n\n" + resultado);