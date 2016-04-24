L.mapbox.accessToken = "pk.eyJ1IjoiYXJzbTgwMCIsImEiOiJjaWw2emQ0cG4wMDR1dWttMHpqbnNreTduIn0.UNqZukLBJRc2FuAvpwVuWQ";

var map = L.mapbox.map('map', 'mapbox.streets')
    .setView([38.9047, -77.0164], 10);


var  marker = L.marker([38.9047, -77.0164]);
marker.addTo(map);

var geocoder = L.mapbox.geocoder('mapbox.places');

geocoder.query("20191", showMap);

function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.lbounds) {
        map.fitBounds(data.lbounds);
    } else if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 10);
    }
}

