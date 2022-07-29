/*

Elaborar um programa que leia 2 notas de um aluno em uma disciplina.
Calcule e informe a média das notas.

*/

let nota1 = parseFloat(prompt('Digite a primeira nota:'))
let nota2 = parseFloat(prompt('Digite a segunda nota:'))

let media = (nota1 + nota2)/2

alert('Primeira nota = ' + nota1 + '\n' + 
'Segunda nota = ' + nota2 + '\n' +
'Média = ' + media.toFixed(2))
