
$(document).ready(function() {
    
   
    // Obtén el elemento <input> del campo de nombre
    const $inputNombre = $('#nombre');
  
    // Inicializa typeahead.js en el campo de nombre
 
  
    // Al seleccionar un nombre, actualiza automáticamente el campo de "Cargo"
    $inputNombre.on('typeahead:select', function(e, nombre) {
      console.log('Nombre seleccionado:', nombre);
      console.log('Usuarios y Cargos:', usuariosCargos);
      const selectedCargo = usuariosCargos[nombre];
      const $inputCargo = $('#cargo');
      $inputCargo.val(selectedCargo);
    });
    
    
  });
  