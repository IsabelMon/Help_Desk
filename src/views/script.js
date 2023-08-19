document.addEventListener('DOMContentLoaded', function() {
  const solicitadoPorSelect = document.getElementById('solicitadoPor');
  const cargoInput = document.getElementById('cargo');

  // Cargar las opciones de solicitadoPor
  for (const nombre of Object.keys(usuariosCargos)) {
    const option = document.createElement('option');
    option.value = nombre;
    option.textContent = nombre;
    solicitadoPorSelect.appendChild(option);
  }

  // Agregar un evento change al campo solicitadoPor
  solicitadoPorSelect.addEventListener('change', function() {
    const selectedUsuario = solicitadoPorSelect.value;
    const selectedCargo = usuariosCargos[selectedUsuario] || '';

    cargoInput.value = selectedCargo;
  });
});

