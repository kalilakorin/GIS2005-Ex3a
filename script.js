mapboxgl.accessToken =
  "pk.eyJ1Ijoiam1mcmltbWwiLCJhIjoiY20wZzdid3JyMTkweTJpb3J1YnJ6b3BkNiJ9.AIq8-_n3FX7v_45I0Ria3w";
map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/jmfrimml/cm0nacj6v01b701pw7dvxenda", // style url
  center: [-104.9, 39.7], // starting position [long, lat]
  zoom: 7 // starting zoom
});

function parseSourceParams() {
  const locationStr = window.location;
  console.log("Location string: " + locationStr);

  const urlParams = new URLSearchParams(locationStr.search);
  var source = urlParams.get("source");
  console.log("Source variable: " + source);

  if (source == "winterpark") {
    // Set center of the map
    map.setCenter([-105.7748, 39.8473]);
    // Set zoom level
    map.setZoom(9);
    // Update inter HTML
    document.getElementById("skiText").innerHTML = "Ski Area: Winter Park";
  }

  if (source == "vail") {
    map.setCenter([-106.319, 39.6446]);
    map.setZoom(9);
    document.getElementById("skiText").innerHTML = "Ski Area: Vail";
  }
}
