// Faça um programa que solicite um número ilimitado de alturas de pessoas e retorne a média dessas alturas. O programa deve ser encerrado quando o usuário digitar 0. Pelo menos uma altura sempre deve ser informada.

let i = 0;
let somaAlturas = 0;
let altura;

do {
    altura = parseFloat(
        prompt("Informe a altura em metros (digite 0 para sair): ")
    );
    somaAlturas += altura;
    i++;
} while (altura !== 0);

let mediaAlturas = somaAlturas / (i - 1);
console.log(`A média de altura é = ${mediaAlturas}`);

// let i = 0;

// while (i < 0) {
//     console.log(i);
//     i++;
// }

// console.log("Fim do programa!");
