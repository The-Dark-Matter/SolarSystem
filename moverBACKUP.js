var ptop;
var pleft;
var size;
var este;
var grande = "0";
function pequeño(){
  if (grande=="1"){
    grande = "0.5";
    $(".flecha").fadeOut("500");
    $(".b").fadeOut("500");//El cuadro para la información desaparece
    $("#"+este.attr("title")).fadeOut("500"); //Desaparece la ficha de información
    este.stop(true).animate({
      height: size,
      width: size,
      top: ptop,
      left: pleft,
    },500);//Detiene cualquier animación en curso y pone en marcha esta
    $("#cerrar").fadeOut("200");//El botón de cerrar desaparece
    $(".a").fadeIn("500").css({"pointer-events": "all"});//Reaparecen los planetas y se puede hacer click en ellos
    $(".flecha").fadeIn("500").css({"pointer-evemts":"all"});
    setTimeout(function(){
      grande = "0";
    },500);
  }
};
$(document).ready(function() {
/*ABRIR*/
  $(".a").click(function() {
    if(grande=="0") {
      grande = "0.5";
      //este = $(this);
      var lastClass = $(this).attr('class').split(' ').pop();
      este = $("."+"a"+"."+lastClass).last();
      size = $(this).height();
      pleft = $(this).css("left");
      ptop = $(this).css("top");
      $(".a").not($(this)).fadeOut("500");//Desaparecen los planetas
      jQuery.when(($(".a").not($(this))).fadeOut("500")).then(function(){
        este.show().stop(true).animate({
          height: "700px",
          width: "700px",
          top: "50px",
          left: "50px",
        }, 500);//Detiene la animación que se estuviese ejecutando y ejecuta esta.
        este.css({"pointer-events":"none",});//Al pulsar el planeta no pasa nada
        $("#"+este.attr("title")).fadeIn("500");//Aparece la ficha del planeta(la que tenga como ID el title del planeta)
        $("#cerrar").fadeIn("500");//Aparece el botón de cerrar
        $(".b").fadeIn("500");//Aparece el marco para las fichas de planetas
        jQuery.when((este.height())=="700px").then(function(){
          grande = "1";
        });
      }); //Cuando los planetas sean invisibles, hace esto
    /*CERRAR*/
      $(document).on('keyup',function(evt){
        if (evt.keyCode == 27) {
          pequeño();
        };
      });
      $("#cerrar").click(function() {
        pequeño();
      });
    };
  });
});

//Puede que el código esté muy poco optimizado, pero es lo que he podido hacer
