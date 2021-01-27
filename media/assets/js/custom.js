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
      $(".navbar").css("background","rgba(17,134,128, 1)");
      $(".logo-DG").css("width", "60px");
    } else {
      headerMain.css(
        {
        "background": "rgba(254, 254, 254, 1)"});
        $(".navbar").css("background","rgba(17,134,128, 1)");
        $(".logo-DG").css("width", "147px");
    }
  });

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
