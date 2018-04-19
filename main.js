  
  
  
  /*pinch in this code in code pen*/
  var marker;
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {
        lat: 52.271834,
        lng: -0.885350
      },
      scaleControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    });
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      animation: google.maps.Animation.BOUNCE,
      position: {
        lat: 52.271834,
        lng: -0.885350
      }
    });
    marker.addListener('click', toggleBounce);
  }