function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   const initValue = 0;
   const sumWithInit = arrayOfNumbers.reduce(
      (accum, currentVal) => accum + currentVal,
      initValue,
   );

   cb(sumWithInit);
}

module.exports = sumarArray;
