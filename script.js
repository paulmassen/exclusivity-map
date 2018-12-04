function RangeOnType()
{
  var myInputValue = $("#start").val();
  $("#outputText").text(myInputValue);
  ChangeMarkersVisibility(myInputValue);
  console.log(myInputValue);
};

function ChangeMarkersVisibility(year)
{
  switch(year) {
      case '2018' :
        console.log("nous sommes en 2018");
        
        break;
      case '2019' :
        console.log("nous sommes en 2019");
        break;
      case '2020' :
        console.log("nous sommes en 2020");
        break;
      case '2021' :
        console.log("nous sommes en 2021");
        break;
      case '2022' :
        console.log("nous sommes en 2022");
        var markerLocation = new L.LatLng(-0.1244324, 51.5006728);
        var marker = new L.Marker(markerLocation);
        mymap.addLayer(marker);
        marker.bindPopup("nous sommes en 2022");
        break;
  }
  
};

$(function() {
	$('#outputText').text('--'); // Valeur par défaut
	$('#start').on('input', RangeOnType);
});

var mymap = L.map("mapid").setView([51.505, -0.09], 13);

var markers = [
    [-0.119623, 51.503308, "London Eye", 2018],
    [-0.1279688, 51.5077286, "Nelson's Column", 2019]
];

for (var i = 0; i < markers.length; i++) {
  
  var lon = markers[i][0];
  var lat = markers[i][1];
  var popupText = markers[i][2];

  var markerLocation = new L.LatLng(lat, lon);
  var marker = new L.Marker(markerLocation);
  mymap.addLayer(marker);

  marker.bindPopup(popupText);
}

L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken:
      "pk.eyJ1IjoicGF1bG1hc3NlbmRhcmkiLCJhIjoiY2pvcG45dHU4MDAwdTNrb3p5a3lnYW1mNyJ9.4PIUsWrAuSf10ovHXoxTpw"
  }
).addTo(mymap);

