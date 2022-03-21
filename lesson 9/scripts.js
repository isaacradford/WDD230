const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        console.table(jsonObject);

        const prophets = jsonObject ['prophets'];
        prophets.forEach(displayProphets)

    });


function displayProphets (prophet) {
    let card = document.createElement('section')
    let h2 = document.createElement('h2')
    let dob = document.createElement('p');
    let pob = document.createElement('p');
    let img = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dob.textContent = `Date of Birth: ${prophet.birthdate}`;
    pob.textContent = `Place of Birth: ${prophet.birthplace}`;

    card.setAttribute('class','card')
    img.setAttribute('src', prophet.imageurl);
    img.setAttribute('alt', `${prophet.name} ${prophet.lastname} ${prophet.order}` )

    card.appendChild (h2);
    card.appendChild (dob);
    card.appendChild (pob);
    card.appendChild (img);

    document.querySelector('div.card_container').appendChild (card);

    }

// let cards = document.querySelectorAll('.cards')
// cards.forEach((item) => {
//     item.remove();
// })

// event listeners for resizing the window and loading window

// function changeStyles () {

//     if (window.innerWidth > 800 && window.innerWidth < 1000) {
//         let change = document.querySelector ('.cards');
//         change.setAttribute('class', 'cards list');
//     }
// }

// window.addEventListener ('reseize', changeStyles);
