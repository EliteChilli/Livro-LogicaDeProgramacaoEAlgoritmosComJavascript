// Após 1 anos o número de chinchilas dele se triplicar a cada ano.

function chinchilasCreator() {
    let inNumber = document.getElementById('inNumber')
    let inYear = document.getElementById('inYear')

    let number = Number(inNumber.value)
    let year = Number(inYear.value)
    let count = 0
    let stick = 0

    let outInformation = document.getElementById('result')
    outInformation.innerHTML = ''

    //Validando as entradas de dados
    if (number == '' || year == '') {
        alert('Digite um número válido')
        inNumber.value == ''
        inYear.value == ''
        inNumber.focus()
    }   

    for (var i = 0; i < year; i++) {
        if (i == 0) {
            stick = stick + number
        } else {
            stick = stick + 3 * number
        }
        count++
        outInformation.innerHTML += `<p>${count}º Ano: ${stick} Chinchilas</p>`
    }
}


let btShow = document.getElementById('btShow')
btShow.addEventListener('click', chinchilasCreator)