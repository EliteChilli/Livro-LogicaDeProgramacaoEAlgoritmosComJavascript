function speedCheck() {

    // recebendo valores das velocidades da via e do usuário
    let inOkSpeed = document.getElementById('inOkSpeed')
    let inUserSpeed = document.getElementById('inUserSpeed')

    let okSpeed = Number(inOkSpeed.value)
    let userSpeed = Number(inUserSpeed.value)

    let outInformation = document.getElementById('outInformation')
    outInformation.textContent = ''

    // Velocidade do condutor menor ou igual a da vida não tem multa
    // Velocidade até 20% maior do que da via a multa é LEVE
    // Velocidade maior do que 20% a velocidade da via a multa é GRAVE

    if (userSpeed <= okSpeed) {
        outInformation.textContent = 'Condutor sem Multas'
    } else if (userSpeed <= (1.2 * okSpeed)) {
        outInformation.textContent = 'Multa Leve'
    } else {
        outInformation.textContent = 'Multa Grave!'
    }


}

let btChecker = document.getElementById('btChecker')
btChecker.addEventListener('click', speedCheck)