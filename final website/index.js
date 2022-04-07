// Lazy Loading

function preloadImage(img) {
    const src = img.getAttribute('data-src');
    if(!src) {
      return;
    }
  
    img.src = src;
  }
  
  const images = document.querySelectorAll('[data-src]')
  
  const imgOptions = {
    threshold: 0,
    rootMargin: '0px 0px -300px 0px'
  };
  
  const imgObserver = new  IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        preloadImage(entry.target);
        imgObserver.unobserve(entry.target);
      }
    })
  }, imgOptions)
  
  images.forEach(image => {
    imgObserver.observe(image);
  })

//   Everything Else

function change(x) {
    x.classList.toggle("change");
  }
  
  function hamMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  } 
  
  let currentdate = document.lastModified
  document.write("Last Modified: " +currentdate)