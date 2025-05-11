'use strict';

/*const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});*/


// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Default global view

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Add markers (replace with your own travel coordinates)
const places = [
  { name: "Edmonton Airport, Canada", coords: [50.302365, -113.577730] },
  { name: "Calgary Airport, Canada", coords: [51.123463, -114.005797] },
  { name: "Narita Airport, Japan", coords: [335.770082, 140.382287] },
  { name: "Shinjuku Station, Tokyo", coords: [35.6895924, 139.7004131] }
];

const lineCoords = places.map(place => place.coords);
L.polyline(lineCoords, {
  color: 'blue',
  weight: 3,
  opacity: 0.7
}).addTo(map);

places.forEach(place => {
    L.marker(place.coords).addTo(map).bindPopup(place.name);
  });