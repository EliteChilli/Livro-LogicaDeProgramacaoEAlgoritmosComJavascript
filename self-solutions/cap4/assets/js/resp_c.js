function verifyNumber() {

    let inNumber = document.getElementById('inNumber')
    let number = Number(inNumber.value)
    let count = 0

    let outInformation = document.getElementById('result')
    outInformation.innerHTML = ''
    let string  =  ''

    if (number == '' || isNaN(number)) {
        alert('Digite um valor válido para fazer o caculo')
        inNumber.value = ''
        inNumber.focus()
    }

    for (var i = 0; i < number; i++) {

        if(number%i == 0){
            string += i + ', ' 
            count += i
        }
    }

    outInformation.innerHTML = `<p><strong>Divisores do ${number}: ${string} (Soma: ${count})</strong></p>`

    if(count == number){
        outInformation.innerHTML += `<p><strong>${number} É um Número Perfeito</strong>`
    }else{
        outInformation.innerHTML += `<p><strong>${number} Não é um Número Perfeito</strong>`
    }
}


let btShow = document.getElementById('btShow')
btShow.addEventListener('click', verifyNumber)