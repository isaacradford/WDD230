function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }



let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
let m_names = ['January', 'February', 'March', 'April']

let mydate = new Date();
console.log(mydate);

let weekname = w_names[mydate.getDay()]
console.log(mydate.getDay());
let monthname = m_names[mydate.getMonth()];

const dateoutput = document.querySelector('#date')
dateoutput.textContent = weekname + "," + mydate.getDate() + "" + monthname + " " + mydate.getFullYear;