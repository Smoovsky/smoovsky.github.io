function initMap() {
  var base = {lat: -37.78, lng: 144.96};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: base
  });
  var marker = new google.maps.Marker({
    position: base,
    map: map
  });
}
