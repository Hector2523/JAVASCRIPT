const veiculo1 = window.prompt("Informe o nome do 1° veículo:");
const velocidade1 = parseFloat(window.prompt("Informe a velocidade do primeiro veículo:"));


const veiculo2 = window.prompt("Informe o nome do 2° veículo:");
const velocidade2 = parseFloat(window.prompt("Informe a velocidade do segundo veículo:"));

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido que " + veiculo2)
} else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é mais rápido que " + veiculo1);
} else {
    alert(veiculo1 + " e " + veiculo2 + " possuem a mesma velocidade");
}