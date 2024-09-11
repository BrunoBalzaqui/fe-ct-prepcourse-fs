function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

/*  var array = [];
  var porDos = array.map(function (x) => {
  
    return x * 2;
});
  return porDos;*/

  var duplicado = array.map((num) => {
    return num * 2
  });

  return duplicado;
}

module.exports = duplicarElementos;
