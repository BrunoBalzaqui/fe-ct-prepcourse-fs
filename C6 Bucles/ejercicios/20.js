function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let suma = 0; // Variable para almacenar la suma

   for (let i = 1; i <= n; i++) {
     suma += i; // Agrega el número actual a la suma
 
     // Si la suma supera 100, detén el bucle
     if (suma > 100) {
       break;
     }
   }
   
   return suma; // Retorna la suma final
}

module.exports = sumarHastaNConBreak;
