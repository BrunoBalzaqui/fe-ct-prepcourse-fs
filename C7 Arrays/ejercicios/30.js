function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  var numEli = 0;

  for(let i = numeros.length; i > 0; i--) {
    numEli = numeros.shift();
    if(numeros.includes(numEli)) {
      return numEli;
    }
 }
}

module.exports = encontrarElementoRepetido;