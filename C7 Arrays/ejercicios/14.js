function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  var arrayMayor = [];

  arrayMayor = array.filter(number => number > 10);

  return arrayMayor.length;
}

module.exports = contarElementosMayoresA10;
