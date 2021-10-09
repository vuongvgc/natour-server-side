/*eslint-disable */
console.log('Hello :D');
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);
mapboxgl.accessToken =
  'pk.eyJ1IjoidnVvbmdkb2RlcCIsImEiOiJja3VobHQ4bW4yZjE4MnFtYXR4ZWh3ZTB4In0.Ovyit85pS8H000iB451csw';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/vuongdodep/ckuhmdp9r9t7218s086ovkyqy',
  //   center: [-118.810131, 34.699434],
  //   zoom: 10,
  //   interactive: false
  scrollZoom: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create market
  const el = document.createElement('div');
  el.className = 'marker';
  // Add Market to Map
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom'
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  new mapboxgl.Popup({
    offset: 30
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day} - ${loc.description}</p>`)
    .addTo(map);

  // Extends map bounds include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: { top: 150, bottom: 150, left: 100, right: 100 }
});
