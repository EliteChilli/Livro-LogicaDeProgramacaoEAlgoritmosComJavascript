/*

Elaborar um programa que leia um número. Calcule e informe os seus
vizinhos, ou seja, o número anterior e posterior.

*/



let number = parseInt(prompt('Informe um número!')) // solicitação do input do usuário

let after = number + 1
let before = number - 1

console.log('Numero = ' + number)
console.log('Vizinhos = ' + before + ' e ' + after)

alert('Número = ' + number + '\n' + 'Vizinhos = ' + before + ' e ' + after)