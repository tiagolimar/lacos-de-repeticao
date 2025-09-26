// Laços de repetição

// Exercício 1: Solicitar ao usuário 5 notas e retornar a média aritmética.

// Laço for

let soma = 0;
let quantidade = 5;

for (let i = 1; i < quantidade + 1; i++) {
    let nota = parseFloat(prompt(`Digite a nota Nº ${i}: `));
    soma += nota;
    console.log(soma);
}

let media = soma / quantidade;

console.log(`A sua média é = ${media}`);

// for...in
for (let indice in array) {
}

// for...of
for (let item of array) {
}
