function calculator() {
    let inNumber = document.getElementById('inNumber')
    let number = inNumber.value

    let outInformation = document.getElementById('outInformation')
    outInformation.textContent = ''


    // verificar se foi digitado o número no input
    if (number == '' || isNaN(number)) {
        alert('Digite um valor válido para o número')
        outInformation.textContent = ''
        inNumber.value = ''
        inNumber.focus()
    }
    else {

        if (number == 0) {
            outInformation.textContent = 'Resposta: 0 é par'

        }
        else if (number % 2 == 0) {
            outInformation.textContent = 'Resposta: ' + number + ' é par'
        }

        else {
            outInformation.textContent = 'Resposta: ' + number + ' é ímpar'
        }
    }



}

let btCalculator = document.getElementById('btCalculator')
btCalculator.addEventListener('click', calculator)
