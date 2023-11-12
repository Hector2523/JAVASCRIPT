let a = 0.1;
let b = 0.2;
let c = 0.3;

if (a + b - 0.00000000000000004 == c) {
    console.log("Sim");
} else {
    console.log("Não");
}

console.log(a + b - 0.00000000000000004);