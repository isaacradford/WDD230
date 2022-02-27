var body = document.querySelector('body');

// localStorage.setItem('bgcolor', '0000ff');

// var currentColor = localStorage.getItem('bgcolor');

// body.style.backgroundColor = '#' + currentColor;


var bgcolorForm = document.getElementById('bgcolor');

if(!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);

setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');

    // document.getElementById('bgcolor').value = currentColor;

    body.style.backgroundColor = '#' + currentColor;

}

bgcolorForm.addEventListener('change', populateStorage);

// localStorage.removeItem('bgcolor')


// Lazy Loading


const images = document.querySelectorAll('img');

const options = { 
    threshold: 1,
    rootMargin: '0px 0px 300px 0px'
 }


function preloadImage(img) {
    const source = img.getAttribute('data-src');
    img.src = source;
        if (!src) {
        return;
    }
        img.src = src;
}


const io = new IntersectionObserver(
    (entries, io) =>  {
        entries.forEach(entry => {
        if(entry.isIntersecting){
            return;
        } 
        else {
            preloadImage(entry.target)
            io.unobserve(entry.target);
        }
    });
    }, options);


images.forEach(images => {
    io.observe(images);
});


// const images = document.querySelectorAll('img')

// function preloadImage(img) {
//     const src = img.getAtrribute('data-src');
//     img.src = source;
//     if (!src) {
//         return;
//     }

//     img.src = src;
// }

// const imgOptions = {
//     threshold: 1, 
//     // rootMargin: '0px 0px -500px 0px'
// };

// const imgObserver = new IntersectionObserver((entries, imgObserver) => {
//     entries.forEach(entry => {
//         if (!entry.isIntersection) {
//             return;
//         } else {
//             preLoadImage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//         })
// }, imgOptions);

// images.forEach (image => {
//     imgObserver.observe(image);
// });