// Creating map
let map = L.map('map', {
    center: [40.7608, -111.8910],
    zoom: 5
});

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Defining API endpoint URL to pull in data in JSON format
const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Using d3 to pull in data
d3.json(url).then((data) => {
// console.log(data)

// Function for circle marker colors based on depth of earthquake
function earthquakeMarkerColors(depth){
    if (depth >= -10 && depth <= 10) {
        return '#A1DE35';
    } else if (depth >= 10 && depth <= 30) {
        return '#ECF60C';
    } else if (depth >= 30 && depth <= 50) {
        return '#E0BE14';
    } else if (depth >= 50 && depth <= 70) {
        return '#E6AA21';
    } else if (depth >= 70 && depth <= 90) {
        return '#E69521';
    } else {
        return '#D64228';
    }
};



// Looping through features to grab lat,long, and depth of each earthquake
for (let i = 0; i < data.features.length; i++) {

    // Creating cicle earthquake markers
    L.circle([data.features[i].geometry.coordinates[1],data.features[i].geometry.coordinates[0]], {
              weight: 0.5,
              //dashArray: '1, 2',
              fillOpacity: 1,
              color: 'black',
              fillColor: earthquakeMarkerColors(data.features[i].geometry.coordinates[2]),
              radius: data.features[i].properties.mag *11000 // Radius of each circle is based on magnitude
    // Applying popups for each data point to display the location, magnitude, and depth of each earthquake    
    }).bindPopup(`<h3>Location: ${data.features[i].properties.place}</h3><hr><h3>Magnitude: ${data.features[i].properties.mag}</h3><hr><h3>Depth: ${data.features[i].geometry.coordinates[2]}</h3>`)
      .addTo(map);
};


// Setting up and defining legend to be displayed in bottomright corner of map
let legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");
  let legendElement = geojson.options.legendElement;
  let colors = geojson.options.colors;
  let labels = [];


// Defining what the legend will contain
let legendInfo = "<div class=\"labels\">" +
        "<div class=\"element1\">" + legendElement[0] + "</div>" +
        "<div class=\"element2\">" + legendElement[1] + "</div>" +
        "<div class=\"element3\">" + legendElement[2] + "</div>" +
        "<div class=\"element4\">" + legendElement[3] + "</div>" +
        "<div class=\"element5\">" + legendElement[4] + "</div>" +
        "<div class=\"element6\">" + legendElement[5] + "</div>" +
      "</div>";

      div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;

};
// Add the legend to the map

 legend.addTo(map)

});




