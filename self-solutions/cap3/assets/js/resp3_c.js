function parking (){
    let inCash = document.getElementById('inCash')
    let cash = Number(inCash.value)
    let exchange = 0

    let outTime = document.getElementById('outTime') 
    outTime.textContent = ''

    let outExchange = document.getElementById('outExchange')
    outExchange.textContent = ''

    let outError = document.getElementById('outError')
    outError.textContent = ''

    // verificador de numero do input
    if(cash == ''){
        alert('Digite um valor válido para o parquímetro')
        inCash.focus()
    }else{
        if (cash >= 3){
            exchange = (cash -  3)
            outTime.textContent = 'Tempo: 120 minutos'
            outExchange.textContent = 'Troco R$: ' + exchange
        }
        
        else if (cash < 1.75 && cash >= 1){
            exchange = (cash -  1)
            outTime.textContent = 'Tempo: 30 minutos'
            outExchange.textContent = 'Troco R$: ' + exchange
        }else if(cash<3 && cash >= 1.75 ){
            exchange = (cash -  1.75)
            outTime.textContent = 'Tempo: 60 minutos'
            outExchange.textContent = 'Troco R$: ' + exchange
        }else{
            outError.textContent = 'O valor inserido é insuficiente, por favor deposite R$ 1 no mínimo.'
        }

    }

}


let btPay = document.getElementById('btPay')
btPay.addEventListener('click', parking)