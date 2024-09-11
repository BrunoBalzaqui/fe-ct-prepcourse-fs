function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  var arrayPares = array.filter(number => number % 2 === 0);

  return arrayPares;
}

module.exports = filtrarNumerosPares;
