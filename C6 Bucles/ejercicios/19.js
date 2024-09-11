function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  // Asegúrate de que n sea un número entero no negativo
  if (n < 1) return 0; 

  return (n * (n + 1)) / 2;
}

module.exports = sumarHastaN;
