import { Intro } from './Another_functions.js';
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// Geolocation Integration....
// const geoLocation = async function(position) {
//     const {latitude} = position.coords;
//     const {longitude} = position.coords;
//     // let lats = -10.511740; lng = -53.492309;
//     console.log(`latitude is ${latitude} and longitude is ${longitude}.`) ;
//     const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
//     console.log(response)
//     const data = await response.json();
//     console.log(data);
//     getCountriesData(data.countryName)
// }
// navigator.geolocation.getCurrentPosition(function(position) {
//     geoLocation(position);
// },function(e) {
//     console.log('Error to get the location',e.message);
// });
//Will Executed first due to microtask queue.
const getPosition = function() {
  return new Promise(function(resolve,reject) {
    navigator.geolocation.getCurrentPosition(resolve,reject);
  });
};
getPosition()
.then(pos => console.log(`${pos.coords.latitude} is latitude and ${pos.coords.longitude} is longitude.`))
.catch(err =>console.log(err.message))
const renderCountryData = function (data,className='',anotherborder = 0) {
    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flags.svg}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.continents}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
                <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
                </div>
                </article>
                `;
    
    if(anotherborder === 1) {
        countriesContainer.insertAdjacentHTML('afterbegin',html);
    }
    else countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
};
const countryNameByCode = async function(code) {
    try {
        const request = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        
        const [data] = await request.json();
        return data;
    } catch(e) {
        console.log("This is Error Happened!! Inside CountryCode",e.message);
    }
}
//standard xml programming
const getCountryData = function (countryName) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  // console.log(request.responseText)
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountryData(data);
});
};

//with async programming json
const getCountriesData = async function (countryName) {
    try {
        const request = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}`,
        );
        if (!request.ok) throw new Error(`No country found`);
        console.log(request);
        const [data] = await request.json();
        // console.log(data);
        renderCountryData(data);
        // console.log(data.name.common)
        // console.log(data.borders[0]);
        if(data.borders && data.borders.length > 0) {
            const NeighbourName = await countryNameByCode(data.borders[0]);
            renderCountryData(NeighbourName,'neighbour');
        }
        if(data.borders && data.borders.length > 1) {
            const anotherNeighbourName = await countryNameByCode(data.borders[1]);
            renderCountryData(anotherNeighbourName,'neighbour',1);
        }
    } catch (e) {
        console.log(`Error is Occured in getcountries`, e.message);
  }
} ;
// getCountryData(countryName);
getCountryData('portugal')
// getCountryData('spain')

btn.addEventListener('click',function() {
    const countryName = "" + prompt("Enter the country name ? ");
    getCountriesData(countryName);
})

//Promise...
const orderCoffee = new Promise((resolve, reject) => {
  console.log("1.Order Coffe!! waiting for my Order");
  setTimeout(() => {
    const machineBroken = true;

    if (!machineBroken) {
      resolve("2.Here is your latte....");
    } else {
      reject("3.Machine is broken!!!Shit!!");
    }
  }, 6000);
});

const getThreeCountries = async function(c1,c2,c3) {
  try {
    const data1 = await (await fetch(`https://restcountries.com/v3.1/name/${c1}`)).json();
    const data2 = await (await fetch(`https://restcountries.com/v3.1/name/${c2}`)).json();
    const data3 = await (await fetch(`https://restcountries.com/v3.1/name/${c3}`)).json();
    return [data1.capital[0],data2.capital[0],data3.capital[0]];
  } catch (err) {
    console.log(err)
    // renderError(err);
  }
};

// getThreeCountries('India','Bhutan','Canada').then(arr => console.log(arr))

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('error'),
  Promise.resolve('another success')
]).then(arr => console.log(arr));

Intro('Soham Kulkarni');
orderCoffee
  .then((message) => {
    console.log(message);
    console.log("Driking my coffee...");
  })
  .catch((error) => {
    console.log(error);
    console.log("No coffee bro....");
  })
  .finally((m = "Hi") => {
    console.log(m);
    console.log("Going to Work then!!");
  });


// (async function() {
//   try {
//     const city = await getCountriesData('India');
//     console.log(city);
//   } catch(err) {
//     console.log(err.message);

//     throw err;
//   }
// })();
