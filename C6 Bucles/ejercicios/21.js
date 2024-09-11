function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  // Verifica si el número es menor o igual a 0, en cuyo caso no es una potencia de 2
  if (numero <= 0) return false;

  // Utiliza un bucle while para dividir el número por 2 mientras sea divisible
  while (numero > 1) {
    // Si el número no es divisible por 2, no es una potencia de 2
    if (numero % 2 !== 0) return false;
    
    // Divide el número por 2
    numero /= 2;
  }
  
  // Si el número se ha reducido a 1, es una potencia de 2
  return numero === 1;
}


module.exports = esPotenciaDeDos;
