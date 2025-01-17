jQuery(document).ready(function() {
  jQuery('#contact-form').on('submit', function(e) {
    e.preventDefault(); // Evitar la recarga de la página

    // Realizar la solicitud AJAX
    jQuery.ajax({
      url: 'https://script.google.com/macros/s/AKfycby_wO7Xpe1Sz39C1ENv4ZwgXB5DZfjFICqEEl3neOTM4jaDXIcO3xCnDKUUf7vERJNk/exec',
      data: jQuery(this).serialize(), // Serializar los datos del formulario
      type: 'POST', // Método HTTP
      success: function(response) {
        // Verifica si la respuesta del servidor indica éxito
        if (response.result === "success") {
          swal({
            title: "¡Gracias!",
            text: "Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.",
            icon: "success",
            timer: 3000
          }).then(function() {
            jQuery('#contact-form')[0].reset(); // Resetear el formulario
          });7
        } else {
          swal({
            title: "Ups...",
            text: "Hubo un problema al enviar tu solicitud. Inténtalo de nuevo más tarde.",
            icon: "error",
            timer: 3000
          });
        }
      },
      error: function(xhr, status, error) {
        // Manejo de errores más detallado
        console.error("Error de AJAX:", status, error);
        swal({
          title: "Error",
          text: "No se pudo enviar el formulario. Revisa tu conexión a internet o inténtalo de nuevo más tarde.",
          icon: "error",
          timer: 3000
        });
      }
    });
  });
});
