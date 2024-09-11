function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  let acumulado = 0;

  for(let i = 0; i < array.length; i++) {
    acumulado = acumulado + array[i];
  }

  if(acumulado % array[0] == 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = todosIguales;
