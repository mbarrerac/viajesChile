$(document).on("click", "#btnEnviarCorreo", function() {
    alert('El correo fue enviado correctamente...')
 });

 $(document).ready(function() {
    // Función para ocultar la tarjeta específica en dispositivos móviles
    function ocultarTarjetaEnMovil() {
        if ($(window).width() < 768) { 
            $('#seccionQuienesSomos').hide(); 
        } else {
            $('#seccionQuienesSomos').show(); 
        }
    }

     // Función para cambiar el tamaño de fuente del ícono de GitHub en dispositivos móviles
     function ajustarTamanoFuente() {
        if ($(window).width() < 768) { 
            $('.tamanoIcon').css('font-size', '1em'); 
        } else {
            $('.tamanoIcon').css('font-size', '2em'); 
        }
    }
   
    // Cuando se hace clic en un enlace del navbar
    $("#seccionNav a").on('click', function(event) {
        
        // Asegúrate de que el hash del enlace no esté vacío
        if (this.hash !== "") {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();

            // Guarda el hash
            var hash = this.hash;

            // Desplazamiento suave usando animate
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function() {
                // Agrega hash (#) al URL cuando se haya desplazado correctamente
                window.location.hash = hash;
            });
        } 
    });


    // Llamar a la función al cargar la página y cuando se redimensiona la pantalla
    ocultarTarjetaEnMovil();
    $(window).resize(function() {
        ocultarTarjetaEnMovil();
        ajustarTamanoFuente();
    });
});