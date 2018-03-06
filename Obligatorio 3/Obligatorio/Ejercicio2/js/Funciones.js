$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').tooltip('show');

});

$("input.form-control-search").click(function () {
    $(this).addClass("changeStyle");
});

$(document).ready(function(){
    $(".start-slide").click(function(){
        $("#myCarousel").carousel('cycle');
    });
});

$('.carousel').carousel({
    interval: 1000
  })

  $(function () {
    $('[data-toggle="popover"]').popover()
  })
