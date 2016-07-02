function initMap() {
  var myLatLng = {lat: 59.956, lng: 30.225};

  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    center: myLatLng
  });

  var image = 'img/icon-map-pin.svg';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });

  marker.setMap(map);
}
