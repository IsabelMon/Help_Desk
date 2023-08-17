const usuariosCargos = require('./views/usuariosCargos');
const solicitadoPorSelect = document.getElementById('solicitadoPor');
const cargoInput = document.getElementById('cargo');

solicitadoPorSelect.addEventListener('change', function() {
    console.log('Evento "change" capturado en el campo "Solicitado Por"');
  const selectedUsuario = solicitadoPorSelect.value;
  const selectedCargo = usuariosCargos[selectedUsuario];
  
  if (selectedCargo) {
    console.log('Cargo correspondiente:', selectedCargo);
    cargoInput.value = selectedCargo;
   
  } else {
    console.log('No se encontró un cargo correspondiente para el usuario seleccionado');
    cargoInput.value = '';
  }
});
