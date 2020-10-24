// DOM
const time = document.querySelector("body > time"),
greeting = document.querySelector("body > h1 > span.greeting"), 
name = document.querySelector("body > h1 > span.name"),
focus = document.querySelector("body > h2.focus"),
body = document.querySelector("body"),
changeBackPlus = document.querySelector("body > button.change_back_plus"),
changeBackMinus = document.querySelector("body > button.change_back_minus");

let regSpace = /\s+/g;

let indexImgArr = randomInteger(1, 5);
console.log(randomInteger(1, 5))


let dayObj = {
    "0" : "Monday",
    "1" : "Tuesday",
    "2" : "Wednesday",
    "3" : "Thursday",
    "4" : "Friday",
    "5" : "Saturday",
    "6" : "Sunday",
}

let mounthObj = {
    "0" : "January",
    "1" : "February",
    "2" : "March",
    "3" : "April",
    "4" : "May",
    "5" : "June",
    "6" : "July",
    "7" : "August",
    "8" : "September",
    "9" : "October",
    "10" : "November",
    "11" : "December",
}


let firstImgObj = {
    "6" : "morning/01.jpg",
    "7" : "morning/02.jpg",
    "8" : "morning/03.jpg",
    "9" : "morning/04.jpg",
    "10" : "morning/05.jpg",
    "11" : "morning/06.jpg",
    "12" : "day/07.jpg",
    "13" : "day/08.jpg",
    "14" : "day/09.jpg",
    "15" : "day/10.jpg",
    "16" : "day/11.jpg",
    "17" : "day/12.jpg",
    "18" : "evening/13.jpg",
    "19" : "evening/14.jpg",
    "20" : "evening/15.jpg",
    "21" : "evening/16.jpg",
    "22" : "evening/17.jpg",
    "23" : "evening/18.jpg",
    "0" : "night/19.jpg",
    "1" : "night/20.jpg",
    "2" : "night/01.jpg",
    "3" : "night/02.jpg",
    "4" : "night/03.jpg",
    "5" : "night/04.jpg",
    };
    let secondImgObj = {
        "6" : "morning/07.jpg",
        "7" : "morning/08.jpg",
        "8" : "morning/09.jpg",
        "9" : "morning/10.jpg",
        "10" : "morning/11.jpg",
        "11" : "morning/12.jpg",
        "12" : "day/13.jpg",
        "13" : "day/14.jpg",
        "14" : "day/15.jpg",
        "15" : "day/16.jpg",
        "16" : "day/17.jpg",
        "17" : "day/18.jpg",
        "18" : "evening/19.jpg",
        "19" : "evening/20.jpg",
        "20" : "evening/01.jpg",
        "21" : "evening/02.jpg",
        "22" : "evening/03.jpg",
        "23" : "evening/04.jpg",
        "0" : "night/05.jpg",
        "1" : "night/06.jpg",
        "2" : "night/07.jpg",
        "3" : "night/08.jpg",
        "4" : "night/09.jpg",
        "5" : "night/10.jpg",
        };
        let thirdImgObj = {
            "6" : "morning/11.jpg",
            "7" : "morning/12.jpg",
            "8" : "morning/13.jpg",
            "9" : "morning/14.jpg",
            "10" : "morning/15.jpg",
            "11" : "morning/16.jpg",
            "12" : "day/17.jpg",
            "13" : "day/18.jpg",
            "14" : "day/19.jpg",
            "15" : "day/20.jpg",
            "16" : "day/01.jpg",
            "17" : "day/02.jpg",
            "18" : "evening/03.jpg",
            "19" : "evening/04.jpg",
            "20" : "evening/05.jpg",
            "21" : "evening/06.jpg",
            "22" : "evening/07.jpg",
            "23" : "evening/08.jpg",
            "0" : "night/09.jpg",
            "1" : "night/10.jpg",
            "2" : "night/11.jpg",
            "3" : "night/12.jpg",
            "4" : "night/13.jpg",
            "5" : "night/14.jpg",
            };
            let fourthImgObj = {
                "6" : "morning/15.jpg",
                "7" : "morning/16.jpg",
                "8" : "morning/17.jpg",
                "9" : "morning/18.jpg",
                "10" : "morning/19.jpg",
                "11" : "morning/20.jpg",
                "12" : "day/01.jpg",
                "13" : "day/02.jpg",
                "14" : "day/03.jpg",
                "15" : "day/04.jpg",
                "16" : "day/05.jpg",
                "17" : "day/06.jpg",
                "18" : "evening/07.jpg",
                "19" : "evening/08.jpg",
                "20" : "evening/09.jpg",
                "21" : "evening/10.jpg",
                "22" : "evening/11.jpg",
                "23" : "evening/12.jpg",
                "0" : "night/13.jpg",
                "1" : "night/14.jpg",
                "2" : "night/15.jpg",
                "3" : "night/16.jpg",
                "4" : "night/17.jpg",
                "5" : "night/18.jpg",
                };
                let fifthImgObj = {
                    "6" : "morning/01.jpg",
                    "7" : "morning/02.jpg",
                    "8" : "morning/03.jpg",
                    "9" : "morning/04.jpg",
                    "10" : "morning/05.jpg",
                    "11" : "morning/06.jpg",
                    "12" : "day/07.jpg",
                    "13" : "day/08.jpg",
                    "14" : "day/09.jpg",
                    "15" : "day/10.jpg",
                    "16" : "day/11.jpg",
                    "17" : "day/12.jpg",
                    "18" : "evening/13.jpg",
                    "19" : "evening/14.jpg",
                    "20" : "evening/15.jpg",
                    "21" : "evening/16.jpg",
                    "22" : "evening/17.jpg",
                    "23" : "evening/18.jpg",
                    "0" : "night/19.jpg",
                    "1" : "night/20.jpg",
                    "2" : "night/01.jpg",
                    "3" : "night/02.jpg",
                    "4" : "night/03.jpg",
                    "5" : "night/04.jpg",
                    };

                    let arrOfImg = [0, firstImgObj, secondImgObj, thirdImgObj, fourthImgObj, fifthImgObj];
                    console.log(arrOfImg[indexImgArr]["01"]);
                    

// console.log(arrOfImg[1][01]);

// console.log(firstImgObj["01"])


function showTime() {
    let currTime = new Date(),
    date = currTime.getDate(),
    day = currTime.getDay(),
    mounth = currTime.getMonth(),
    hours = currTime.getHours(),
    minutes = currTime.getMinutes(),
    seconds = currTime.getSeconds();
    



    
    time.innerHTML = `<span class="timer">${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}</span>
    <span class="currentDay">${dayObj[day]}: ${date} of ${mounthObj[mounth]}</span>`

    setTimeout(showTime, 1000)
}

// add zero 
function addZero(numb) {
    let res = numb;
    if (numb < 10) {
        return res = '0' + res;
    } else return res;
}

// BACKGROUND & GREATING CHANGE

let nime = new Date();
let curHou = nime.getHours();


    




let failTime = new Date(),
currentTime = failTime.getHours();
console.log(currentTime);

function changeBackButtPlus() {
    ++currentTime;
    if (currentTime > 23) {
        currentTime = 00
    }
    
    changeBackPlus.disabled = true;
    setTimeout('changeBackPlus.disabled = false;', 2300);
    console.log(currentTime);
    return currentTime;
    } 

    function changeBackButtMinus() {
        --currentTime;
        if (currentTime < 00) {
            currentTime = 23
        }
        

        changeBackMinus.disabled = true;
        setTimeout('changeBackMinus.disabled = false;', 2300);
        console.log(currentTime);
        return currentTime;
        } 

  
changeBackPlus.addEventListener("click", changeBackButtPlus);  
changeBackPlus.addEventListener("click", setBackGreat);
changeBackMinus.addEventListener("click", changeBackButtMinus);  
changeBackMinus.addEventListener("click", setBackGreat);


 
//  let src = "./assets/images/"+`${arrOfImg[indexImgArr][currentTime]}`;
// console.log(src);
//  const img = document.createElement("img"); 
function setBackGreat() {
  let src = `./assets/images/${arrOfImg[indexImgArr][currentTime + '']}`;
console.log(src);
console.log([currentTime + '']);
 const img = document.createElement("img"); 

 
     
    switch(currentTime) {
case 00: 


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
  
   
break;
case 01:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 02:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 03:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 04:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 05:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 06:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 07:
  

    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };  
break;
case 08:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 09:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 10:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 11:  

    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 12:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 13:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 14:
  

    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 15:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 16:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;

case 17:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 18:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 19:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 20:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 21:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 22:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;
case 23:  


    
    img.src = src;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${src})`;
    };
break;

      }



}

function setGreating() {
  let nowDate = new Date();
  let nowHours = nowDate.getHours();

  if ( nowHours >= 6 && nowHours < 12) {
        
    greeting.textContent = "Good morning, "
} else if (nowHours >= 12 && nowHours < 18) {
    
    greeting.textContent = "Have a nice day, "
} else if ( nowHours >= 18 && nowHours < 23) {

    
    greeting.textContent = "Good night, "
} else {
   
    greeting.textContent = "I hope you get enough sleep, "
}
}


//  GET  & SET name


function getName() {
    if (!localStorage.getItem('name')) {
        name.textContent = '[ENTER YOU NAME PLEASE]';
    } else {
        name.textContent =  localStorage.getItem('name');
    }
}

function setName(e) {
    if (e.type === 'keypress') {
     
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name.blur();
      }  
     
    } else if (e.target.textContent == '') {
        e.target.textContent = localStorage.getItem('name');
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }

// GET focuse
function getFocus() {
    if (!localStorage.getItem('focus')) {
        focus.textContent = '[ENTER YOU FOCUS PLEASE]';
    } else {
        focus.textContent =  localStorage.getItem('focus');
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
     
      if (e.which == 13 || e.keyCode == 13) {

        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else if (e.target.textContent == '' ) {
        e.target.textContent = localStorage.getItem('focus');
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }


  function clearName() {
      if (name.innerText ) {
          localStorage.setItem("name", name.innerText);
          name.innerText = ""
        }
    
  }
  
  function clearFocus() {
    if (focus.innerText ) {
        localStorage.setItem("focus", focus.innerText);
        focus.innerText = ""
      }
  
}

// Random NUMBER
function randomInteger(min, max) {

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};





 
  
  


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

  name.addEventListener("click", clearName);
  focus.addEventListener("click", clearFocus);
// GOOOOOOOOOOOO
showTime();
setBackGreat();
getName() ;
getFocus();
setGreating();






// WEATHER
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const humidity = document.querySelector('.humidity');
const wind_speed = document.querySelector('.wind_speed');


 async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('cityWeather')}&lang=ru&appid=90aedb0c05fa4ccb9c538e58fa9b24b5&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    // console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
 try{
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    console.log(data.weather[0].id)
   
    temperature.textContent = `${data.main.temp}°C`;
} catch(e) {

    
    city.textContent = '[УПССС! ГОРОД НА КАРТЕ НЕ ОБНАРУЖЕНО!]';

}
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Влажность: ${data.main.humidity}%`;
    wind_speed.textContent = `Скорость ветра: ${data.wind.speed}м/с`;
  }

  
  function getCity() {
    if (!localStorage.getItem('cityWeather')) {
        city.textContent = '[ENTER YOU CITY PLEASE]';
    } else {
        city.textContent =  localStorage.getItem('cityWeather');
    }
}



  function setCity(event) {
    if (event.type === 'keypress') {
     
      if (event.which == 13 || event.keyCode == 13) {

        localStorage.setItem('cityWeather', event.target.innerText);
        getWeather();
        city.blur();
       
      }
    } else if (event.target.textContent === '' ) {
        event.target.textContent = localStorage.getItem('cityWeather');
    
    //  else if (){

    } else {
      localStorage.setItem('cityWeather', event.target.innerText);
    }
  }


  function clearCity() {
    if (city.innerText ) {
        localStorage.setItem("cityWeather", city.innerText);
        city.innerText = ""
      }
  
}


  
  document.addEventListener('DOMContentLoaded', getWeather);
  city.addEventListener('blur', setCity);
  city.addEventListener("click", clearCity);
city.addEventListener('keypress', setCity);
    city.addEventListener('blur', getWeather);  

  getWeather();
  getCity();
  

// QUOTES


const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btn = document.querySelector('.btn');

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов если браузер возвращает ошибку Cross-Origin Request Blocked 
async function getQuote() {  
  const url = `https://api.chucknorris.io/jokes/random`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.value;
//   figcaption.innerHTML = `<img src="${data.icon_url}">`;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);

