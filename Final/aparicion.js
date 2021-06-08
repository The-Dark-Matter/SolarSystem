var ptop = 0;
var pleft = 0;

$(document).ready(function() {
  $('.a').click(function() {
    ptop = ($(this).css("top"))+"px";
    pleft = ($(this).css("left"))+"px";
    $(".a").fadeOut("500");
    $(this).fadeOut("500");
    jQuery.when($(this).fadeOut("500")).then(function(){
      $(this).css({"height": "700px", "width":"700px", "top": "50px", "left": "50px","pointer-events":"none",}).fadeIn("500");
      $("#"+$(this).attr("title")).fadeIn("500");
    });
    $("#cerrar").hide().delay("500").fadeIn("500");
    $(".b").hide().delay(500).fadeIn("500");
  });
  $("#cerrar").click(function() {
    $(".a").not(":hidden").fadeOut("500");
    $(".b").fadeOut("500");
    $("#"+$(".a").not(":hidden").attr("title")).fadeOut("500");
    jQuery.when($(".a").not(":hidden").fadeOut("500")).then(function(){
          $(".a").css({"height": "var(--size)", "width": "var(--size)", "position":"absolute", "top":"var(--top)","left":"var(--left)","pointer-events":"all",}).fadeIn("500");
        });
    $(this).fadeOut("200");
  })
});
