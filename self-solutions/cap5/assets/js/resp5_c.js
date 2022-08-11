
var test = []

function showAll() {
    let outInformation = document.getElementById('outInformation')

    outInformation.innerHTML = ''

    for (var i = 0; i < test.length; i++) {
        outInformation.innerHTML += `<p>${test[i].nome} - ${test[i].acertos} acertos</p>`
    }
}

function checkTest() {
    let inName = document.getElementById('inName')
    let inNumber = document.getElementById('inNumber')
    let outInformation = document.getElementById('outInformation')

    let name = inName.value
    let number = Number(inNumber.value)
    outInformation.innerHTML = ''

    let check = prompt('Número de Acertos para Aprovação')

    let copyTest = test.slice()
    copyTest.sort((a, b) => a.acertos - b.acertos)
    let countApproved = 0

    for (var i = copyTest.length; i > 0; i--) {

        console.log(copyTest[i - 1])
        if (copyTest[i - 1].acertos >= check) {
            outInformation.innerHTML += `<p>${copyTest[i - 1].nome} - ${copyTest[i - 1].acertos} acertos</p>`
            countApproved++
        }
    }

    if (countApproved == 0) {
        outInformation.innerHTML = `<p>Não houve aprovados para a 2ª Fase</p>`
    }

}

function addPeople() {
    let inName = document.getElementById('inName')
    let inNumber = document.getElementById('inNumber')
    let outInformation = document.getElementById('outInformation')

    let name = inName.value
    let number = Number(inNumber.value)
    outInformation.innerHTML = ''

    if (name == '') {
        alert('Digite o nome do candidato')
        inName.focus()
        inName = ''
        return
    }

    if (number == '' | isNaN(number)) {
        alert('Digite o número de acertos do candidato')
        inNumber.focus()
        inNumber = ''
        return
    }


    test.push({ nome: name, acertos: number })
    inName.value = ''
    inNumber.value = ''

    for (var i = 0; i < test.length; i++) {
        outInformation.innerHTML += `<p>${test[i].nome} - ${test[i].acertos} acertos</p>`
    }
}




let btAll = document.getElementById('btAll')
btAll.addEventListener('click', showAll)

let btCheck = document.getElementById('btCheck')
btCheck.addEventListener('click', checkTest)

let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', addPeople)