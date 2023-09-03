
$(document).ready(function() {
    
   
    // Obtén el elemento <input> del campo de nombre
    const $inputNombre = $('#nombre');
  
    // Inicializa typeahead.js en el campo de nombre
 
  
    // Al seleccionar un nombre, actualiza automáticamente el campo de "Cargo"
    $inputNombre.on('typeahead:select', function(e, nombre) {
      console.log('Nombre seleccionado:', nombre);
      const selectedInfo = usuariosCargos[nombre];
      if (selectedInfo) {
        const $inputArea = $('#area');
        const $inputPlaca = $('#placa');
        const $inputCargo = $('#cargo');
        const $inputTipo = $('#tipo');
        $inputArea.val(selectedInfo.area);
        $inputCargo.val(selectedInfo.cargo); 
        $inputPlaca.val(selectedInfo.placa);
        $inputTipo.val(selectedInfo.tipo);
      }
    });
    
    
  });
  