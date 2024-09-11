function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  var arrayMayus = array.map((mayus) => {
    return mayus.toUpperCase();
  });

  return arrayMayus;
}

module.exports = convertirStringAMayusculas;
