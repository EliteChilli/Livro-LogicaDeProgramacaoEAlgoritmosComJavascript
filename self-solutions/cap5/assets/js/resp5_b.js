var numberOrder = []

function addNumber() {

    let inNumber = document.getElementById('inNumber')
    let number = Number(inNumber.value)

    let outInformation = document.getElementById('outInformation')

    if (number == '') {
        alert('Adicione o Número Corretamente!')
        inNumber.focus()
        return
    }

    let count = 0
    let numberList = 'Números: '

    if (numberOrder.indexOf(number) >= 0) {
        count++
    }
    if (count > 0) {
        alert('Adicione outro número, por favor')
        inNumber.focus()
        inNumber.value = ''
        return
    } else {
        numberOrder.push(number)
        outInformation.innerHTML = ''
        outOrder.innerHTML = ''
        for (var i = 0; i < numberOrder.length; i++) {
            if (i == numberOrder.length - 1) {
                numberList += numberOrder[i]
            }
            else {
                numberList += numberOrder[i] + ', '
            }
        }

        outInformation.innerHTML = numberList
    }

    inNumber.value = ''
}

function verifyNumber() {

    var numberOrderCopy = numberOrder.slice()
    numberOrderCopy.sort(function (a, b) { return a - b })
    let diff = 0

    let outOrder = document.getElementById('outOrder')
    outOrder.innerHTML = ''

    for (var i = 0; i < numberOrder.length; i++) {
        if (numberOrderCopy[i] != numberOrder[i]) {
            diff++
        }
    }

    if (diff > 0) {
        outOrder.innerHTML = `<p>Atenção... Os números não estão em ordem crescente</p>`
    } else{
        outOrder.innerHTML = `<p>Ok... Os números estão em ordem crescente</p>`
    }

}

document.getElementById('btAdd').addEventListener('click', addNumber)
document.getElementById('btVerify').addEventListener('click', verifyNumber)