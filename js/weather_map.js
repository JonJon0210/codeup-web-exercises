"use strict"


mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-day-v4',
    center: [-98.4916, 29.4252],
    zoom: 9
});


var marker = new mapboxgl.Marker({
    color: "green",
    draggable: true
})
    .setLngLat([-98.4916, 29.4252])
    .addTo(map);



// geocode(searchString, mapBoxToken).then(function(result){
//     console.log(result);
//     map.jumpTo({
//         center: result
//     });
//     map.setZoom(20);
//     marker.setLngLat(result);
// })

