function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  
  var arrayMulti = [];

  for(let i = 0; i < array.length; i++) {
    arrayMulti.push(array[i] * i);
  }

  return arrayMulti;
}

module.exports = multiplicarElementosPorIndice;
