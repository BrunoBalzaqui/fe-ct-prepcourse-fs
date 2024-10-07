function cambiarCadena(string, callback) {
   // Aplica la función de callback al string y devuelve el resultado.
   // La función de callback se encargará de recibir el string y devolverlo con los cambios.
   // Si no se recibe una función callback entonces se debe retornar el string original.
   // Tu código:

       // Verificamos si el callback es una función
       if (typeof callback === 'function') {
         // Si lo es, aplicamos la función al string y devolvemos el resultado
         return callback(string);
     }
     // Si no se recibe un callback, retornamos el string original
     return string;
}

module.exports = cambiarCadena;
