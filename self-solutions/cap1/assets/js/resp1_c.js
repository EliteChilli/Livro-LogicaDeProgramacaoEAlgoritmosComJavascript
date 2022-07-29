/*

Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x.

*/

let price = parseFloat(prompt('Digite o valor do produto:'))
let inCash = price*0.9
let inCredit = price/3

alert('Preço do produto: R$' + price.toFixed(2) + '\n' + 
'Preço à vista: R$' + inCash.toFixed(2) + '\n' + 
'Ou em 3x de R$' + inCredit.toFixed(2))

console.log(price)
console.log(inCash)
console.log(inCredit)
