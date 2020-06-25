/* Scroll de navbar */
    // scroll
    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.my_nav'),
                    sd = $('.js-scroll-wrap');

            if (st > 150) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');    
                }
            } 
            if (st < 150) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            } 
            if ( st > 350 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');   
                }
                
                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 350 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

/* Fin de scroll de navbar */

/*----para cargar efectos de fadeIn al hacer scroll---- */

new WOW().init();

/*----Fin ----*/


/* Codigo para scroll en una pagina distinta */

$("nav a").on("click",function(e){
	e.preventDefault();
	var id = $(this).data('id');
	var href = $(this).attr('href');
	if(href == "#"){

		scrollToID(id,1000);
	}else{
		$.cookie('scroll',id);
		window.location.href=href;
	}

});

$(".footer-top a").on("click",function(e){
	e.preventDefault();
	var id = $(this).data('id');
	var href = $(this).attr('href');
	if(href == "#"){

		scrollToID(id,1000);
	}else{
		$.cookie('scroll',id);
		window.location.href=href;
	}

});


function scrollToID(id,speed){
	var offSet = 70;
	var obj = $("#"+id);
	
	if(obj.length){
			
		var offs = obj.offset();
		var targetOffset = offs.top - offSet;
		$('html,body').animate({scrollTop:targetOffset},speed);
	}

}
function normalScroll(id,speed){
	var offSet = 70;
	var obj = $("#"+id);

		var offs = obj.offset();
		var targetOffset = offs.top - offSet;
		$('html,body').animate({scrollTop:targetOffset},speed);

}

var scroll = $.cookie("scroll");

if(scroll){
	scrollToID(scroll,1000);
	$.removeCookie('scroll')
}


$(".listado button").on("click",function(){

	var data = $(this).data("id");
	console.log(data);
	normalScroll(data,1000);

})


/*---fin--- */



/* CODIGO PARA QUE EN LA PAGINA DE CONTACTOS APAREZCA Y DESAPAREZCA CADA ARTICULO */



$("#abrir_precios").on("click",function(){
	$("article#metas").fadeOut(100);
	$("#preguntas_respuestas").fadeOut(100);
	$("article#personal").fadeOut(100);
	$("article#testimonios").fadeOut(100);
	$("article#precios").fadeIn(400);
	
});

$("#abrir_metas").on("click",function(){
	$("article#precios").fadeOut(100);
	$("#preguntas_respuestas").fadeOut(100);
	$("article#personal").fadeOut(100);
	$("article#testimonios").fadeOut(100);
	$("#metas").fadeIn(400);
	
})

$("#abrir_preguntas").on("click",function(){
	$("article#metas").fadeOut(100);
	$("article#precios").fadeOut(100);
	$("article#personal").fadeOut(100);
	$("article#testimonios").fadeOut(100);
	$("#preguntas_respuestas").fadeIn(400);
	
})

$("#abrir_testimonios").on("click",function(){
	$("article#metas").fadeOut(100);
	$("article#precios").fadeOut(100);
	$("article#preguntas_respuestas").fadeOut(100);
	$("article#personal").fadeOut(100);
	$("#testimonios").fadeIn();
	
})

$("#abrir_personal").on("click",function(){
	$("article#metas").fadeOut(100);
	$("article#precios").fadeOut(100);
	$("article#preguntas_respuestas").fadeOut(100);
	$("article#testimonios").fadeOut(100);
	$("article#personal").fadeIn();
	
})



/* CODIGO PARA QUE EN LA SECCION DE CONTENIDO AL HACER HOVER SOBRE CADA IMAGEN , APAREZCA UNA CAPA VERDE AZULADO */

var contenidos = $(".contenido");

/*for para añadir id a cada contenido */
for(var i=0;i<contenidos.length;i++){

	$(contenidos[i]).attr("id",i);
	$("#"+i+".contenido .contenido-centro").attr("id",i);
	 }

$(".contenido").hover(function(e){
	
	//$(".contenido .capa").css({"opacity":"1","visibility":"visible","transform":"translateY(0%)"})

	for( var i=0;i<contenidos.length;i++){
		
		
		if($("#"+i+".contenido .contenido-centro")[0].id == e.target.id){
			$("#"+i+".contenido .capa").css({"opacity":"1","visibility":"visible","transform":"translateY(0%)"})
		}
	}
},function(e){

	$(".contenido .capa").css({"opacity":"0","visibility":"hidden","transform":"translateY(100%)"})

});


/*----fin ---*/




/*CODIGO PARA HACER SLIDER EN EL ARTICULO DE PREGUNTAS Y RESPUESTAS */

var preguntas = $(".pregunta");


for(var i=0;i<preguntas.length;i++){

	$(preguntas[i]).attr("id",i);
	$(".pregunta#"+i+" .texto").attr("id",i);
	$(".pregunta#"+i+" .ion-ios-arrow-down").attr("id",i)
	$(".pregunta#"+i+" .ion-ios-arrow-up").attr("id",i)
	 }



$(".pregunta .texto").on("click",function(e){
		for( var i=0;i<preguntas.length;i++){
		

		if($("#"+i+".pregunta .texto")[0].id == e.target.id){
			if($("#"+i+".pregunta .ion-ios-arrow-up").css('display') == 'none'){

				$("#"+i+".pregunta .ion-ios-arrow-down").addClass("d-none");
				$("#"+i+".pregunta .ion-ios-arrow-up").removeClass("d-none");
				$("#"+i+".pregunta .menu").slideDown();
				break;
			}
			else{
				$("#"+i+".pregunta .ion-ios-arrow-down").removeClass("d-none");
				$("#"+i+".pregunta .ion-ios-arrow-up").addClass("d-none");
				$("#"+i+".pregunta .menu").slideUp();
				break;
			}
			

			
			
		}

	}
});

/*--- FIN --- */



/* CODIGO PARA HACER SLIDER EN LA SECCION DE TESTIMONIO */

var testimonios = $(".caja_testimonio");

for(var i=0;i<testimonios.length;i++){

	$(testimonios[i]).attr("id",i);
	 }


var testimonio='';

    $(".caja_testimonio").hover(function(e){
    
   for(var i=0;i<testimonios.length;i++){
	if($("#"+i+".caja_testimonio")[0].id == e.currentTarget.id){
		testimonio = $("#"+i+".caja_testimonio .contenido_testimonio");
		testimonio.slideDown();
		break;
	}	

	 }


    },function(){
      testimonio.slideUp();
      testimonio=null;
    });


/* --- FIN --- */






