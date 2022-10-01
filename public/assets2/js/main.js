$('.hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function openNav() {
    document.getElementById("mySidepanel").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }