function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
    // Casos especiales
    if (numero <= 1) return false; // Los números menores o iguales a 1 no son primos
    if (numero === 2) return true;  // El número 2 es el único número primo par
  
    // Verifica divisibilidad desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // Si se encuentra un divisor, el número no es primo
      }
    }
  
    return true; // Si no se encontraron divisores, el número es primo

}

module.exports = esNumeroPrimo;
