// mapboxgl.accessToken =
//   'pk.eyJ1Ijoic2lsZW5jZTIyMDAiLCJhIjoiY2wxMXJ5OXlxMG9xMzNkbXMyNzVremdwMiJ9.hVz5WyEVvUWmx6tZW3hcJA';
//    map = new mapboxgl.Map({
//   container: 'map', // container ID
//   style: 'mapbox://styles/silence2200/cl11tkc3900kr14md0vx7y3n7',
// });

/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2lsZW5jZTIyMDAiLCJhIjoiY2wxMXJ5OXlxMG9xMzNkbXMyNzVremdwMiJ9.hVz5WyEVvUWmx6tZW3hcJA';

  const map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy',
    style: 'mapbox://styles/silence2200/cl11tkc3900kr14md0vx7y3n7',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
