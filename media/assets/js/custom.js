$(document).ready(function() {

  $( ".descripcion" )
  .mouseenter(function() {
      $( this ).find( "p" ).css( "display" , 'none' );
      $( this ).css( "background" , 'none' );
  })
  .mouseleave(function() {
      $( this ).find( "p" ).css( "display" , 'block' );
      $( this ).css( "background-color" , 'rgb(0, 0, 0 , 0.5)' );
  });

  // $(window).on("load", function (e) {
  //   $("#loader").fadeOut('slow', function(){
  //     $(this).hide();
  //   });
  //   $(body).removeClass('bodyHide');
  // })
  var headerMain =  $("header");
  // calcular el margen para mainMenu
  function margenSuperior(){
    var mainMargin = $(".main");
    mainMargin.css("margin-top", headerMain.height());
    if ($(window).width() <= 576) {
      mainMargin.css("margin-top", "0");
    }
  }
  margenSuperior();
  // Ajustamos el margen segun el ancho del la ventana
  $(window).resize(function() {
    margenSuperior();
    });

var laLinea = $("#laLinea");
  // // funcion para ajustar el header
  $(window).scroll(function() {
    var headerMain =  $("header");
    if ($(window).scrollTop() >= laLinea.height()) {
      headerMain.css({
        "background": "rgba(254, 254, 254, .9)"});
      $(".navbar").css("background","rgba(163, 0, 81, 1)");
      $(".logo-DG").css("width", "60px");
    } else {
      headerMain.css(
        {
        "background": "rgba(254, 254, 254, 1)"});
        $(".navbar").css("background","rgba(163, 0, 81, 1)");
        $(".logo-DG").css("width", "147px");
    }
  });

  // Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
// Ejemplo para el modal
var cardPopUp = $("#card-popUp");
var mainContent = $(".main");

    cardPopUp.click(function(e){
      e.preventDefault();
      mainContent.empty();
      console.log("click");
      $('#myModal').modal('show');
    });
    $('#myModal').on('hidden.bs.modal', function (e) {
      location.reload();
      mainContent.load("views/main/main.php", function(){
        document.location.href = "#card-popUp";
      });
    })
});
let ubicacionPrincipal = window.pageYOffset;
window.onscroll =function(){
  let desplazamientoActual = window.pageYOffset;
  if(ubicacionPrincipal>=desplazamientoActual){
    document.getElementsById('scrollNav').style.top='0';
  }else{
    document.getElementsById('scrollNav').style.top='-150px';
  }
  ubicacionPrincipal=desplazamientoActual;
}