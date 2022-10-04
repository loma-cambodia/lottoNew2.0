$('.hero-slider').owlCarousel({
    loop:true,
    autoplay:true,
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
    document.getElementById("mySidepanel").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
$(function(){
    var active_dates = ["21/9/2022","25/9/2022"];
    // $("#datepicker").datepicker({
    //     format: "dd/mm/yyyy",
    //     autoclose: true,
    //     todayHighlight: false,
    //     beforeShowDay: function(date){
    //         var d = date;
    //         var curr_date = d.getDate();
    //         var curr_month = d.getMonth() + 1; //Months are zero based
    //         var curr_year = d.getFullYear();
    //         var formattedDate = curr_date + "/" + curr_month + "/" + curr_year
   
    //           if ($.inArray(formattedDate, active_dates) != -1){
    //               return {
    //                  classes: 'activeClass'
    //               };
    //           }
    //          return;
    //      }
    //  });
  })
  $(window).on("scroll", function () {
    var header = $(".site-header.sticky-header");
    var height = header.innerHeight();
    var scroll = $(this).scrollTop();
    if (scroll >= height) {
        header.addClass("sticky");
    } else {
        header.removeClass("sticky");
    }
    if ($(this).scrollTop() >= 200) {
        $(".scroll-up").show(300);
        $(".news-wrapper").addClass("short");
        $(".news-wrapper").addClass("shrink");
        $(".news-wrapper").removeClass("full");
    } else {
        $(".scroll-up").hide(300);
        $(".news-wrapper").addClass("full");
        $(".news-wrapper").removeClass("short");
        $(".news-wrapper").removeClass("shrink");
    }
});
function myFunction() {
        var element = document.getElementById("myDIV");
        element.classList.toggle("shrink");
}
			
	