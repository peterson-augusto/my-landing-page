function getProjects() { // Pegar os repositórios
    const urlGitHub = 'https://api.github.com/users/peterson-augusto/repos'
    let loadingElement = document.getElementById('loading')

    fetch(urlGitHub, {
        method: 'GET'
    })
        .then((response) => response.json()) // transformar a resposta em json
        .then((response) => {
            console.log(response)
            loadingElement.style.display = 'none'
            showProjects(response)
        })
        .catch((e) => {
            console.log(e)
        })


}

function showProjects(data) { // Mostrar os repositórios na tela
    let listElement = document.getElementById('my-projects-list')

    for (let i = 0; i < data.length; i++) {
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        let linkText = document.createTextNode(data[i]['name'])
        a.appendChild(linkText)
        listElement.appendChild(a)
    }
}

getProjects()