function conversor(){
    let inMedicine = document.getElementById('medicine').value
    let inPrice = document.getElementById('price').value

    let price = Math.floor(inPrice*2)

    let outMedicine = document.getElementById('titleMedicine')
    let outPayment = document.getElementById('payment')

    outMedicine.innerHTML = 'Promoção de ' + inMedicine
    outPayment.innerHTML = 'Leve 2 por apenas R$: ' + price
}


let btConversor = document.getElementById('buttonPromotion')
btConversor.addEventListener('click', conversor)