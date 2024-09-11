function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  var primerValor = 0;
  
  const acum = arrayOfNums.reduce((acum, actual) => acum + actual,
  primerValor,
  );

  return acum;
}

module.exports = agregarNumeros;
