    $(document).ready(function(){
  // Realizar comentario
        $("#Messaje").click(function(){
          $(this).addClass('d-none');
          console.log("DSDSADDASD");
         
           var validacion=0; 
            if($("#nombre").val().length <=0){$("form #nombre").addClass("is-invalid");validacion=1;}else{$("form #nombre").removeClass("is-invalid");}
            if($("#asunto").val().length <=0){$("form #asunto").addClass("is-invalid");validacion=1;}else{$("form #asunto").removeClass("is-invalid");}
            if($("#mensaje").val().length <=0){$("form #mensaje").addClass("is-invalid");validacion=1;}else{$("form #mensaje").removeClass("is-invalid");}
             
             var correo=$("#correo").val();
             if(correo.length>=1){
                     if(!(/\S+@\S+\.\S+/.test(correo))){
                     $("#correo").addClass("is-invalid");validacion=1;
                        }else{
                         $("#correo").removeClass("is-invalid");
                        }
                }else{
                  $("#correo").addClass("is-invalid");validacion=1;
                  $("#mdl-contact").modal("show");
                     $("#contact").html('<h5 class="text-danger">Correo electrónico no valido</h5>');
                     $("#correo").val('');
                      $(this).removeClass('d-none');
                }
                var response = grecaptcha.getResponse();
                console.log("Recapchass",  response);
                if(response.length == 0){
                     alert("Es necesario verificar el reCAPTCHA.");
                      $(this).removeClass('d-none');
                     return false;
                }
              
            if(validacion==1){
                      $("#mdl-contact").modal('show');
                     $("#contact").html('<h5 class="text-danger">Llene los campos correctamente marcados en rojo </h5>');
                      $(this).removeClass('d-none');
            }else{
                 $("#captchap").append('<div class="text-center spinner-border m-5 remov" role="status"></div>');
              console.log("Entra");
              $.ajax({
                    url:BASEURL+'front/contacto/contacto',            
                    method:"POST",
                    data:{ 'g-recaptcha-response':$('#g-recaptcha-response').val(),
                    'nombre':$("#nombre").val(),'correo':$("#correo").val(),
                    'asunto':$("#asunto").val(),'mensaje':$("#mensaje").val()},
                    success:function(respuesta){
                    var respuesta    =JSON.parse(respuesta);
                      var error    = respuesta.error;
                      var mensaje    = respuesta.mensaje;
                      $("#mdl-contact").modal({ backdrop: 'static', keyboard: false },"show");
                      if(error==1){
                        $("#contact").html('<h5 class="text-danger">'+mensaje+'</h5>');
                        $("#Messaje").removeClass('d-none');
                      }else{
                        $("#contact").html('<h5 class="text-success">'+mensaje+'</h5>');
                        $("#nombre").val('');
                        $("#correo").val('');
                        $("#asunto").val('');
                        $("#mensaje").val('');
                        grecaptcha.reset();
                        $("#Messaje").removeClass('d-none');
                        $('.remov').remove();
                      }
                    },
                    error:function(error){}
              });
            }
            
           });
    });