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
  { name: "Tokyo, Japan", coords: [35.6895, 139.6917] },
  { name: "Tokyo, Japan", coords: [30.6895, 139.6917] }
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