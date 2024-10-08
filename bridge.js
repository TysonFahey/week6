// Where in the world will the map be?

let mapCenter = [40, -100]; // latitude, longtitude of minnesota (the start point of the map that will show when it loads)

// How much will we be zooming in and out of the map
let zoomLevel = 4; // between large city and whole world

let map = L.map("bridge-map").setView(mapCenter, zoomLevel); // creating the map
// tiles- pictures that make up to map

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(map);

//bridge list array
let bridgeList = [
  {
    name: "Verrazano-Narrows Bridge",
    City: "New York, NY",
    span: "1298.4",
    location: [40.6066, -74.0447],
  },
  {
    name: "Golden Gate Bridge",
    City: "San Francisco and Marin, CA",
    span: "1280.2",
    location: [37.8199, -122.4793],
  },
  {
    name: "Mackinac Bridge",
    City: "Mackinaw and St Ignace, MI",
    span: "1158",
    location: [45.8174, -84.7278],
  },
  {
    name: "George Washington",
    City: "New York, NY and New Jersey",
    span: "1067.0",
    location: [40.8517, -73.9527],
  },
  {
    name: "Tacoma Narrows Bridge",
    City: "Tacoma and Kitsap, WA",
    span: "853.44",
    location: [47.269, -122.5517],
  },
];

// todo change color of icon longest bridge
let greenIcon = L.icon({
  iconUrl: 'bridge.png',
  iconSize: [40, 70],

})

bridgeList.forEach(function (bridgeObject) {
  // draw a marker for each bridge
  // save what you want to see in the pop up
  let markerText = `${bridgeObject.name}`;
  L.marker(bridgeObject.location, {icon: greenIcon}).bindPopup(markerText).addTo(map);
});



