/*f<script src="/javascripts/jquery.js" type="text/javascript"></script>
<script src="/javascripts/jquery.hashchange.js" type="text/javascript"></script>
<script src="/javascripts/jquery.easytabs.js" type="text/javascript"></script>*/

function myFunction(element) {
   //get all list items:
   var liArray = document.getElementsByClassName("etabs").getElementsByClassNameName("tabs");

    //make all items inactive
    for (var i = 0; i < liArray.length; i++)
        liArray[i].className = "inactive";

    //make clicked item active:
    element.className = "active";
}


function initialize() {
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);