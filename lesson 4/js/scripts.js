//  Navigation Bar
function navbar() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// Banner message for certain days
window.onload = function dayCheck (){
  let mydate = new Date().getDay();
  console.log(mydate);
  let data = document.getElementById("day")


  if (mydate == 1 || mydate == 2 ) {
    data.innerHTML = 'Mondays and Tuesdays ONLY, come in for a free consulation!'
    
  }
  else {
    data.innerHTML = ''
  }
};



// Display date
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;


// Weather widget
var css_file=document.createElement("link"); 
var widgetUrl = location.href; css_file.setAttribute("rel","stylesheet"); 
css_file.setAttribute("type","text/css"); css_file.setAttribute("href",'https://s.bookcdn.com/css/w/booked-wzs-widget-275.css?v=0.0.1'); 
document.getElementsByTagName("head")[0].appendChild(css_file); 

function setWidgetData_38723(data) { 
  if(typeof(data) != 'undefined' && data.results.length > 0) 
  { for(var i = 0; i < data.results.length; ++i) 
    { var objMainBlock = document.getElementById('m-booked-weather-bl250-38723'); if(objMainBlock !== null) 
    { var copyBlock = document.getElementById('m-bookew-weather-copy-'+data.results[i].widget_type); objMainBlock.innerHTML = data.results[i].html_code; if(copyBlock !== null) objMainBlock.appendChild(copyBlock); } } }
  else { alert('data=undefined||data.results is empty'); } } var widgetSrc = "https://widgets.booked.net/weather/info?action=get_weather_info;ver=7;cityID=564;type=3;scode=124;ltid=3458;domid=w209;anc_id=72563;countday=undefined;cmetric=1;wlangID=1;color=137AE9;wwidth=160;header_color=ffffff;text_color=333333;link_color=08488D;border_form=1;footer_color=ffffff;footer_text_color=333333;transparent=0;v=0.0.1";
  widgetSrc += ';ref=' + widgetUrl;widgetSrc += ';rand_id=38723';
  var weatherBookedScript = document.createElement("script"); 
  weatherBookedScript.setAttribute("type", "text/javascript"); 
  weatherBookedScript.src = widgetSrc; document.body.appendChild(weatherBookedScript)


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
  rootMargin: '0px 0px -200px 0px'
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
