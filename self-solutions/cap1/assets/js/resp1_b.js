/*

Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente.

*/

let total = parseFloat(prompt('Qual o total da conta da mesa?')) // Input do valor da nota
let client = parseInt(prompt('Informe a quantidade de clientes pagantes:')) // Input do número de clientes

let subTotal = total/client

alert ('Cada cliente vai pagar: R$' + subTotal)

