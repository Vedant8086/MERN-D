"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");
// let map,mapEvent;
class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition();
  }

  _getPosition() {
    navigator.geolocation.getCurrentPosition(this._loadmap.bind(this), function (e) {
      alert(`Could not able to get your location!!!`);
    });
  }

  _loadmap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}/`);
    const coords = [latitude, longitude];
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", function (mapE) {
      this.#mapEvent = mapE;
      form.classList.remove("hidden");
      inputDistance.focus();
    });
  }
  
  _showform() {
}

_toggleElevationField() {}

_newWorkout() {}
}

const app = new App();

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 150,
        maxHeight: 650,
        minHeight: 450,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      }),
    )
    .setPopupContent("Workout!!")
    .openPopup();

  form.classList.add("hidden");
});