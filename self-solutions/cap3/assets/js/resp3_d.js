function triangleVerify() {
    // Recebendo os valores dos lados do triangulo
    let inSideA = document.getElementById('inSideA')
    let inSideB = document.getElementById('inSideB')
    let inSideC = document.getElementById('inSideC')

    let sideA = inSideA.value
    let sideB = inSideB.value
    let sideC = inSideC.value

    let outInformation = document.getElementById('outInformation')
    let outType = document.getElementById('outType')

    outInformation.textContent = ''
    outType.textContent = ''

    //Verificar se o usuário digitou os valores dos campos
    if (sideA == 0 || sideB == 0 | sideC == 0) {
        alert('Digite o valor dos lados maior do que ZERO!')
    } else {

        // 3 LADOS IGUAIS = Equilátero
        // 2 LADOS IGUAIS = Isósceles
        // TODOS LADOS DIFERENTES = Escaleno

        if (sideA == sideB && sideA == sideC) {
            outInformation.textContent = 'Lados podem formar um triangulo'
            outType.textContent = 'Tipo: Equilátero'
        } else if (sideA == sideB && sideA != sideC ||
            sideB == sideC && sideC != sideA ||
            sideA == sideC && sideC != sideB) {
            outInformation.textContent = 'Lados podem formar um triangulo'
            outType.textContent = 'Tipo: Isósceles'
        } else {
            outInformation.textContent = 'Lados podem formar um triangulo'
            outType.textContent = 'Tipo: Escaleno'
        }
    }
}


let btVerify = document.getElementById('btVerify')
btVerify.addEventListener('click', triangleVerify)