function fruitRepeat() {

    let inNumber = document.getElementById('inNumber')
    let number = Number(inNumber.value)

    let inDescription = document.getElementById('inDescription')
    let description = inDescription.value
    let fruit = ''

    let outInformation = document.getElementById('result')
    outInformation.innerHTML = ''
    

    // validar dados de entrada 
    if (number == '' || isNaN(number) || description == '') {
        alert('Adicione um valor válido!')
        inDescription.textContent = ''
        inDescription.focus()
    }

    for (var i = 1; i <= number; i++) {
        if (i == number) {
            fruit += `${description}`
        } else {    
            fruit += `${description}*`
        }
        //console.log(fruit)
    }
    outInformation.innerHTML = `<p><strong>${fruit}</strong></p>` 
}

let btRepeat = document.getElementById('btRepeat')
btRepeat.addEventListener('click', fruitRepeat)