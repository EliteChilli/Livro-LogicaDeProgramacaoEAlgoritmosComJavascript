var allClub = []

function addClub() {
    let inClub = document.getElementById('inClub')
    let name = inClub.value

    if (name == '') {
        alert('Informe os dados corretamente!')
        return
    }

    allClub.push(name)

    outInformation.innerHTML = ''
    for (var i = 0; i < allClub.length; i++) {
        outInformation.innerHTML += `<p> ${i + 1}. ${allClub[i]}</p>`
    }

    inClub.value = ''
}

function listAll() {
    let outInformation = document.getElementById('outInformation')
    outInformation.innerHTML = ''

    if (allClub.length == 0) {
        alert('Não temos clubes cadastrados')
    } else {

        for (var i = 0; i < allClub.length; i++) {
            outInformation.innerHTML += `<p>${i + 1} - ${allClub[i]}</p>`
        }
    }
}

function clubMatch() {
    let outInformation = document.getElementById('outInformation')

    if (allClub.length == 0) {
        alert('Não temos clubes cadastrados')
        return
    }

    if (allClub.length % 2 != 0) {
        alert('Não podemos realizar o campeonato pois o número de times \nnão fechou as chaves eliminatórias')
    } else {
        outInformation.innerHTML = ''
        for (let i = 0; i < allClub.length / 2; i++) {
            let first = i
            let last = allClub.length - 1 - i

            outInformation.innerHTML += `<p>${allClub[first]} x ${allClub[last]}</p>`

        }
    }

}

let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', addClub)

let btAll = document.getElementById('btAll')
btAll.addEventListener('click', listAll)

let btFilter = document.getElementById('btFilter')
btFilter.addEventListener('click', clubMatch)