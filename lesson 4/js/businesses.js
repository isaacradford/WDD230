// const requestURL = '';
function display_data_by(format) {

fetch('./businesses.JSON')
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        console.table(jsonObject);
        
        document.getElementById('business_table').innerHTML = ''
        document.getElementById('business_cards').innerHTML = ''

        const businesses = jsonObject ['businesses'];
        if (format == 'card') {
            businesses.forEach(displayBusinessCard)
        } 

        if (format == 'table'){
            displayBusinessTable(businesses)
        }
    });
}

function displayBusinessCard (business) {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let phonenum = document.createElement('p');
    let website = document.createElement('p');

    name.textContent = `${business.name}`;
    phonenum.textContent = `Phone Number: ${business.phonenum}`;
    website.textContent = `Website: ${business.website}`;

    card.setAttribute('class','card');

    card.appendChild (name);
    card.appendChild (phonenum);
    card.appendChild (website);


    document.querySelector('div.card_container').appendChild(card);
}


function displayBusinessTable (businesses) {
    
    let table = document.createElement('table')
    let row = table.insertRow();
    let name = row.insertCell();
    let phonenum = row.insertCell();
    let website = row.insertCell();
    let websiteText = document.createTextNode('Website:')
    let phonenumText = document.createTextNode('Phone Number:')
    let nameText = document.createTextNode('Name:')

    website.appendChild(websiteText)
    phonenum.appendChild(phonenumText)
    name.appendChild(nameText)

    for (b of businesses) {
        console.log (b)
        let row = table.insertRow();
        let name = row.insertCell();
        let phonenum = row.insertCell();
        let website = row.insertCell();

        let websiteText = document.createTextNode(`${b.website}`)
        let phonenumText = document.createTextNode(`${b.phonenum}`)
        let nameText = document.createTextNode(`${b.name}`)

        website.appendChild(websiteText)
        phonenum.appendChild(phonenumText)
        name.appendChild(nameText)
    }

    document.getElementById('business_table').appendChild(table);
}
      




// fetch('businesses.JSON')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('cards_container').innerText = data.sentence
//     })
