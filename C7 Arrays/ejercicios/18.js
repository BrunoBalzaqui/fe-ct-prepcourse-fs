function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var primerValor = 0;

  const acum = resultadosTest.reduce((acum, actual) => acum + actual,
  primerValor,
  );

  return acum / resultadosTest.length;
}

module.exports = promedioResultadosTest;
