function conversor(){
    let inPrice = document.getElementById('price').value
    let inTime = document.getElementById('time').value

    let number = Math.ceil(inTime/15) * inPrice

    let outPayment = document.getElementById('payment')

    outPayment.innerHTML = 'Valor a Pagar R$: ' + number
}


let btConversor = document.getElementById('calculator')
btConversor.addEventListener('click', conversor)