document.addEventListener('DOMContentLoaded', function() {
  const solicitadoPorSelect = document.getElementById('solicitadoPor');
  const areaInput = document.getElementById('area');
  const placaInput = document.getElementById('placa');
  const cargoInput = document.getElementById('cargo');

  // Cargar las opciones de solicitadoPor y área
  for (const nombre of Object.keys(usuariosCargos)) {
    const optionSolicitadoPor = document.createElement('option');
    optionSolicitadoPor.value = nombre;
    optionSolicitadoPor.textContent = nombre;
    solicitadoPorSelect.appendChild(optionSolicitadoPor);

    const optionArea = document.createElement('option');
    optionArea.value = usuariosCargos[nombre].area;
    optionArea.textContent = usuariosCargos[nombre].area;
    areaInput.appendChild(optionArea);

    const optionPlaca = document.createElement('option');
    optionPlaca.value = usuariosCargos[nombre].placa;
    optionPlaca.textContent = usuariosCargos[nombre].placa;
    placaInput.appendChild(optionPlaca);
  }

  // Agregar un evento change al campo solicitadoPor
  solicitadoPorSelect.addEventListener('change', function() {
    const selectedUsuario = solicitadoPorSelect.value;
    const selectedCargo = usuariosCargos[selectedUsuario] ? usuariosCargos[selectedUsuario].cargo : '';
    const selectedArea = usuariosCargos[selectedUsuario] ? usuariosCargos[selectedUsuario].area : '';
    const selectedPlaca = usuariosCargos[selectedUsuario] ? usuariosCargos[selectedUsuario].placa : '';


    cargoInput.value = selectedCargo;
    areaInput.value = selectedArea;
    placaInput.value = selectedPlaca;
  });
});
