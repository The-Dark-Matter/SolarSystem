var lastClass; var ptop; var pleft; var size; var este; var grande = "0";
function pequeño(){
  if (grande=="1"){
    grande = "0.5";
    $(".flecha").fadeOut("500");
    $(".b").fadeOut("500");//El cuadro para la información desaparece
    $("#"+este.attr("title")).fadeOut("500"); //Desaparece la ficha de información
    este.stop(true).animate({height: size, width: size, top: ptop, left: pleft},500);//Detiene cualquier animación en curso y pone en marcha esta
    $("#cerrar").fadeOut("200");//El botón de cerrar desaparece
    $(".a").fadeIn("500").css({"pointer-events": "all"});//Reaparecen los planetas y se puede hacer click en ellos
    setTimeout(function(){grande = "0"},500);
  }
};
function agranda() {
  grande = "0.5";
  size = este.height();
  pleft = este.css("left");
  ptop = este.css("top");
  //este = $(this);
  //este = $('"'+("."+"a"+"."+lastClass)+'"');
  $(".a").not(este).fadeOut("500");//Desaparecen los planetas
  jQuery.when(($(".a").not(este)).fadeOut("500")).then(function(){
    este.show().stop(true).animate({height: "700px", width: "700px", top: "50px", left: "50px"}, 500);//Detiene la animación que se estuviese ejecutando y ejecuta esta.
    este.css({"pointer-events":"none",});//Al pulsar el planeta no pasa nada
    $("#"+este.attr("title")).fadeIn("500");//Aparece la ficha del planeta(la que tenga como ID el title del planeta)
    $("#cerrar").fadeIn("500");//Aparece el botón de cerrar
    $(".b").fadeIn("500");//Aparece el marco para las fichas de planetas
    jQuery.when((este.height())=="700px").then(function(){grande = "1"});
    $(".flecha").fadeIn("500").css({"pointer-evemts":"all"});
  });
}
function der() {
  console.log(lastClass);
  if (lastClass<9) {
    lastClass ++;
  }
  else {
    lastClass = 1;
  }
  console.log(lastClass);
  pequeño();
  este = $("."+"a"+"."+lastClass).last();
  agranda();
  suma = Number(lastClass) + 1;
}
function izq() {
  console.log(lastClass);
  if (lastClass>1) {
    lastClass --;
  }
  else {
    lastClass = 9;
  }
  console.log(lastClass);
  pequeño();
  este = $("."+"a"+"."+lastClass).last();
  agranda();
  suma = Number(lastClass) + 1;
}
$(document).ready(function() {
/*ABRIR*/
  $('.a').click(function() {
    lastClass = $(this).attr('class').split(' ').pop();
    este = $("."+"a"+"."+lastClass).last();
    if(grande=="0") {
      agranda();
      /*CERRAR*/
      $(document).on('keyup',function(evt){
        if (evt.keyCode == 27) {
          pequeño();
          console.log(lastClass);
        }
        else if (evt.keyCode == 37) {
          if (grande == 1) {
            izq();
          }
        }
        else if (evt.keyCode == 39) {
          if(grande == 1) {
            der();
          }
        }
      });
      $("#cerrar").click(function() {
          pequeño();
          console.log(lastClass);
      });
    };
  });
  $("#fd").click(function() {
    der();
  });
  $("#fi").click(function() {
    izq();
  });
});
