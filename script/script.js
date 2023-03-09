function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("mobile-nav-toggle").style.display="none"
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mobile-nav-toggle").style.display="block"

  }

  // pet details page

  $('.card_').on('click', function() {
    // console.log("wprkingg ");
		// var product = $(this).data('product-id');
		window.location.href = `petDetails.html`;
	});


  (function($) {
    //Function to animate slider captions
    function doAnimations(elems) {
      //Cache the animationend event in a variable
      var animEndEv = "webkitAnimationEnd animationend";
  
      elems.each(function() {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function() {
          $this.removeClass($animationType);
        });
      });
    }
  
    //Variables on page load
    var $myCarousel = $("#carouselExampleIndicators"),
      $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");
  
    //Initialize carousel
    $myCarousel.carousel();
  
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
  
    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animated']"
      );
      doAnimations($animatingElems);
    });
  })(jQuery);

  function myfunction(smallImg){
    var fullImg = document.getElementById("imageBox");
    fullImg.src = smallImg.src
  }