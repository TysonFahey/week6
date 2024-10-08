// need to show map need where and how far to zoom in

// where: latitude, longitude
let metroAreaCenterCoordinates = [44.96, -93.2];

// how far to zoom in
let zoomLevel = 9; // zoom levels start at 1 max is 20

// create the map
let map = L.map("college-map").setView(metroAreaCenterCoordinates, zoomLevel); // tells leaflet where to draw the map (in this case inside the div labeled college-map)

// leaflets uses url to request to open the tile layers
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// circle around metro
let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
  color: "green", // set color of the circle
  radius: 30000, // 20ish miles
  fillOpacity: 0.2, // set how much you want to see through the circle
})
  .bindPopup("Twin Cities Metro Area") // label what the circle is for
  .addTo(map);

campuses = [
  {
    name: "Minneapolis College",
    website: "https://minneapolis.edu",
    coordinates: [44.9724, -93.2844],
  },
  {
    name: "Saint Paul College",
    website: "https://saintpaul.edu",
    coordinates: [44.94839, -93.1099],
  },
  {
    name: "Normandale Community College",
    website: "https://normandale.edu",
    coordinates: [44.8297, -93.3312],
  },
  {
    name: "North Hennepin Community College",
    website: "https://nhcc.edu",
    coordinates: [45.1054232, -93.3767558],
  },
  {
    name: "Century College",
    website: "https://www.century.edu/",
    coordinates: [45.0438494, -92.9862026],
  },
];

campuses.forEach(function (collegeCampus) {
  // draw a marker for each campus
  // save what you want to see in the pop up in a variable
  let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`;
  L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map);
});

// repetative way example start
// let mctcCoordinates = [44.9724, -93.2844]; // minneapolis college coordinates

// let mctcMarker = L.marker(mctcCoordinates)
//   .bindPopup(
//     'Minneapolis College<br><a href="https://www.minneapolis.edu">Website</a>'
//   )
//   .addTo(map);
// // adds the marker to the coordinates stored in an array in mctcCoordinates
// // bindPopup('') allows you to add a html string in a pop up message

// let stPaulCoordinates = [44.9483, -93.1099];
// let stPaulMarker = L.marker(stPaulCoordinates)
//   .bindPopup(
//     'Saint Paul College<br><a href="https://www.saintpaul.edu">Website</a>'
//   )
//   .addTo(map);
// // add normandale college
// let normandaleCoordinates = [44.8297, -93.3312]; // normandales coordinates
// let normandaleMarker = L.marker(normandaleCoordinates)
//   .bindPopup(
//     'Normandale College<br><a href="https://www.normandale.edu">Website</a>'
//   )
//   .addTo(map);
// // repetative way end

// create a circle on the map
