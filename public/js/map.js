// <!-- Your JavaScript for Map Rendering -->
// <script type="text/javascript">
//   // Fetch MAP_TOKEN from server-side
//   let mapToken = "<%= process.env.MAP_TOKEN %>";
//   console.log("Map Token:", mapToken);

//   // Initialize Mapbox
//   mapboxgl.accessToken = mapToken;

//   const map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/mapbox/light-v9',
//     center: [0.45, 51.47],  // Adjust center if needed
//     zoom: 11
//   });

//   // Initialize Deck.gl
//   // const { DeckGL, ScatterplotLayer } = deck;
//   new DeckGL({
//   map: map,
//   initialViewState: {
//       longitude: 0.45,
//       latitude: 51.47,
//       zoom: 11,
//   },
//   layers: [
//       new ScatterplotLayer({
//           id: 'scatter-layer',
//           data: [{ position: [0.45, 51.47] }],
//           getPosition: d => d.position,
//           getFillColor: [255, 0, 0, 200],
//           getRadius: 1000
//       })
//   ]
// });
// </script>