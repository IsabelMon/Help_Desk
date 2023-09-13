// Obtener el valor del campo datetime-local de fechaHoraSolicitud
const fechaHoraSolicitudInput = document.getElementById("fechaHoraSolicitud");
const valorDateTimeLocalSolicitud = fechaHoraSolicitudInput.value;

// Obtener el valor del campo datetime-local de fechaHoraFinalizado
const fechaHoraFinalizadoInput = document.getElementById("fechaHoraFinalizado");
const valorDateTimeLocalFinalizado = fechaHoraFinalizadoInput.value;

// Función para formatear la fecha y hora en formato AM/PM
function formatearHoraAmPm(valorDateTimeLocal) {
  // Convertir el valor en un objeto Date
  const fechaHora = new Date(valorDateTimeLocal);

  // Obtener la hora y los minutos
  const horas = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();

  // Determinar si es AM o PM
  const periodo = horas >= 12 ? "PM" : "AM";

  // Convertir a formato de 12 horas
  let horas12 = horas % 12;
  horas12 = horas12 || 12; // Ajustar a 12 si es 0

  // Formatear la hora y los minutos con ceros a la izquierda si es necesario
  const horaFormateada = horas12.toString().padStart(2, "0");
  const minutosFormateados = minutos.toString().padStart(2, "0");

  // Crear la cadena de hora en formato AM/PM
  const horaAmPm = `${horaFormateada}:${minutosFormateados} ${periodo}`;

  return horaAmPm;
}

// Formatear la hora de fechaHoraSolicitud
const horaAmPmSolicitud = formatearHoraAmPm(valorDateTimeLocalSolicitud);

// Formatear la hora de fechaHoraFinalizado
const horaAmPmFinalizado = formatearHoraAmPm(valorDateTimeLocalFinalizado);

console.log("Hora de Solicitud:", horaAmPmSolicitud);
console.log("Hora de Finalizado:", horaAmPmFinalizado);
