const button = document.querySelector('.btn');
// const buttons = document.getElementByClassName('btn');


function show() {
    // button.classList.add('newstyle');
    button.classList.toggle('newstyle');
    // it will be a toggle button for the hamburger menu
};

button.addEventListener('click', show);
// buttons.addEventListener('click', show);



const hamburgerBtn = document.querySelector('.ham');
const navigation = document.querySelector('.navigation');

hamburgerBtn.addEventListener('click', () => {navigation.classList.toggle('responsive')}, false)




let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let m_names = ['January', 'February', 'March', 'April']

let mydate = new Date();
console.log(mydate);

let weekname = w_names[mydate.getDay()]
console.log(mydate.getDay());
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date')
dateoutput.textContent = weekname + "," + mydate.getDate() + "" + monthname + " " + mydate.getFullYear;


