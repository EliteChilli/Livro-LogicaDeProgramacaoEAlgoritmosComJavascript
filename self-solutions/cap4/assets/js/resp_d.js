function starCreator() {

    let inNumber = document.getElementById('inNumber')
    let number = Number(inNumber.value)

    let outInformation = document.getElementById('result')
    outInformation.innerHTML = ''
    let star = ''

    if (number == '' || isNaN(number)) {
        alert('Digite um valor válido para fazer o cáculo')
        inNumber.value = ''
        inNumber.focus()
    }

    for (var i = 1; i <= number; i++) {
        star += '*'
        outInformation.innerHTML += `<p>${star}</p>`
    }
}


let btCreator = document.getElementById('btCreator')
btCreator.addEventListener('click', starCreator)