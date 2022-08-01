function conversor(){
    let inProduct = document.getElementById('product').value
    let inPrice = document.getElementById('price').value

    promotion = inPrice/2
    totalPrice =  (inPrice/2 + inPrice*2)

    let outProductTitle = document.getElementById('productTitle')
    let outPromotion= document.getElementById('promotion')

    outProductTitle.innerHTML = inProduct + ' - Promoção: Leve 3 por R$ ' + totalPrice
    outPromotion.innerHTML = 'O Terceiro produto custa apenas R$: ' + promotion

}   


let btConversor = document.getElementById('calculator')
btConversor.addEventListener('click', conversor)