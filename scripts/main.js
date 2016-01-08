console.log('Welcome To Harbor Christian/Leadership Academy'); // eslint-disable-line no-console
// SLIDESJS
$(function(){
  $("#slides").slidesjs({
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "fade",
        // [string] Can be either "slide" or "fade".
      interval: 3000,
        // [number] Time spent on each slide in milliseconds.
      auto: true,
        // [boolean] Start playing the slideshow on load.
      swap: false,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 00
        // [number] restart delay on inactive slideshow
    }
  });
});

function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(30.5151747,-97.8882121),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.HYBRID
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
