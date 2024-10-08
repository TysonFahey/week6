// Where in the world will the map be? 

let mapCenter = [40, -100] // latitude, longtitude of minnesota (the start point of the map that will show when it loads)

// How much will we be zooming in and out of the map
let zoomLevel = 4 // between large city and whole world


let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel) // creating the map 
// tiles- pictures that make up to map

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(bridgeMap)

// When we have a set of objects and they are generally the same (have same attributes), store as an array of objects 

// all the things are bridges

// they all have a name 
// they all have a span, location, latitude, longitude

// a bridge object may be 
/*

{
name: 'golen gate bridge',
city: 'San Francisco',
span: '1234m',
location: [35, -105]
}
{
name: 'oragne water bridge',
city: 'Orange county',
span: '1524m',
location: [20, -15]
}


*/

bridge list array
let brdigeList = [
{name: 'Verrazano-Narrows Bridge', City: 'New York, NY', span: '1298.4', location: [ 40.6066, -74.0447]}
{name: 'Golden Gate Bridge', City: 'San Francisco and Marin, CA', span: '1280.2', location: [37.8199,-122.4793]}
{name: 'Mackinac Bridge', City: 'Mackinaw and St Ignace, MI', span: '1158', location: [45.8174,-84.7278]}
{name: 'George Washington', City: 'New York, NY and New Jersey', span: '1067.0', location: [40.8517,-73.9527]}
{name: 'Tacoma Narrows Bridge', City: 'Tacoma and Kitsap, WA', span: '853.44', location: [47.2690,-122.5517]}

]

brdigeList.forEach(function(bridgeObject){
    let bridgeName = bridgeObject.name
    let bridgeLocation = bridgeObject.location
    
    // draw a marker
    // todo - add a popup - see videos 
    bridgeMarker.bindPupup('Hello?') // todo

    let L.marker(bridgeLocation)
    bridgeMarker.addTo(bridgeMap)
})