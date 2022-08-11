
var news = []


function showTheNews() {
    let number = prompt('Quantas notícias você gostaria de ver?')
    let bankOfNews = news.length
    outInformation.innerHTML = `<p>Notícias Cadastradas: ${bankOfNews} <br></p>`
    console.log(news)
    if (number > news.length || number == null) {
        alert('Número inválido, tente novamente!')
        return
    }

    outInformation.innerHTML += `<p>${number} últimas notícias
    <br>---------------------------------------------</p>`

    for (var i = news.length; i > (news.length - number); i--) {
        outInformation.innerHTML += `<p>${i}º) ${news[i - 1].noticia}</p>`
    }
}

function addSomeNews() {
    let inNews = document.getElementById('inNews')
    let lastNews = inNews.value


    let outInformation = document.getElementById('outInformation')


    news.push({ ordem: (news.length + 1), noticia: lastNews })

    inNews.value = ''
    let bankOfNews = news.length

    outInformation.innerHTML = `<p>Notícias Cadastradas: ${bankOfNews}</p>`
}

let btAll = document.getElementById('btShow')
btAll.addEventListener('click', showTheNews)

let btAdd = document.getElementById('btAdd')
btAdd.addEventListener('click', addSomeNews)