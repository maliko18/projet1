function initMap() {
    // The location
    var Boumerdès = {lat: 36.758080, lng: 3.471160};
    // The map
    var map = new google.maps.Map(
        document.querySelector(".map"), {zoom: 4, center: Boumerdès});
    
    var marker = new google.maps.Marker({position: Boumerdès, map: map});
  }
  
  
  // Smooth scrolling
  $("#navbar a, .btn").on("click", function(event) {
  
    if(this.hash !== "") {
      event.preventDefault();
  
      const hash = this.hash;
  
      $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
  });
  
  
  // navbar Opacity
  
  window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
      document.querySelector("#navbar").style.opacity = 0.9;
    } else {
      document.querySelector("#navbar").style.opacity = 1;
    }
  });