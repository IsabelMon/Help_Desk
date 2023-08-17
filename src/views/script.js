$(document).ready(function() {
    const solicitadoPorSelect = document.getElementById('solicitadoPor');
    const cargoInput = document.getElementById('cargo');
  
    solicitadoPorSelect.addEventListener('change', function() {
      const selectedUsuario = solicitadoPorSelect.value;
      const selectedCargo = usuariosCargos[selectedUsuario] || 'Cargo no encontrado';
  
      cargoInput.value = selectedCargo;
    });
  });
  