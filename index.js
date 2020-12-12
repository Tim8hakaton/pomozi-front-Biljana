let URL = 'http://localhost:3000/posts'
let POSTS = 'http://localhost:3000/posts'

let akcije = document.querySelector('.akcije')
let akcijaBtn = document.querySelector('#posalji-akciju')
let input = document.querySelectorAll('.input')

function get() {
    return fetch(`${URL}`)
        .then(res => res.json())
        .then(res => {
            res.forEach(akcija => {
                let container = document.createElement('div')
                let naziv = document.createElement('h3')
                let datum = document.createElement('p')
                let opis = document.createElement('p')
                let kontakt = document.createElement('p')
                let organizacija = document.createElement('p')
                let mesto = document.createElement('p')
                naziv.textContent = akcija.title;
                datum.textContent = akcija.datum;
                opis.textContent = akcija.description;
                kontakt.textContent = akcija.contact;
                organizacija.textContent = akcija.organisation;
                mesto.textContent = akcija.grad;

                container.appendChild(naziv)
                container.appendChild(datum)
                container.appendChild(opis)
                container.appendChild(kontakt)
                container.appendChild(organizacija)
                container.appendChild(mesto)
                akcije.appendChild(container)
                //daj klase elementima
                container.className = 'pera'


            });
        })

}


async function postData(url = '{URL}', input = {}) {

    let data = {}
    input.forEach(polje => {
        data[polje.id] = polje.value

    })
    console.log(data)
    const response = await fetch(url, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
    });

    return response.json();
}


get();
akcijaBtn.addEventListener('click', () => postData(POSTS, input))
