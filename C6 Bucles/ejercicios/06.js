function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if(num >= 100 && num <= 999 && Number.isInteger(num))  {
    return true;
  } else {
    return false;
  }
}

module.exports = tieneTresDigitos;
