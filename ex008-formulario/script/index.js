let nomeCompleto = document.getElementById("nomeCompleto");
let primeiroNome = window.prompt("Qual o seu primeiro nome?");
let sobrenome = window.prompt("Qual seu sobrenome?");
let campo = document.getElementById("campo");
let nascimento = window.prompt("Em que ano você nasceu?");

campo.innerHTML = window.prompt("Qual o seu campo de estudo?");

document.getElementById("sucess").style.display = "block";

nomeCompleto.innerHTML = primeiroNome + " " + sobrenome;

nascimento = document.getElementById("idade").innerHTML = (2023 - nascimento);