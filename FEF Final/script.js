$(document).ready(function(){
    $('.hover').hover(function(){
        $(this).addClass('icon');
    $('.icon').hover(function(){
        $(this).removeClass('icon');
    })
    })
});

$(document).ready(function() {
    $(".final").click(function(event) {
      $(".link").load("https://github.com/mkendricks18/Front-End-Foundations-Final");
    });
  });

  $(document).ready(function() {
    $(".boot").click(function(event) {
      $(".link").load("https://github.com/mkendricks18/Bootstrap");
    });
  });

  $(document).ready(function() {
    $(".proj").click(function(event) {
      $(".link").load("https://github.com/mkendricks18/JS-Projects");
    });
  });

  $(document).ready(function() {
    $(".flex").click(function(event) {
      $(".link").load("https://github.com/mkendricks18/FlexBox");
    });
  });

  $(document).ready(function() {
    $(".end").click(function(event) {
      $(".link").load("https://github.com/mkendricks18/FEF");
    });
  });