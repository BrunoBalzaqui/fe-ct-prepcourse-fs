function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código: ayuda de gpt
  
  const arrayDeCaracteres = texto.split('');
  
  // Invertir el array de caracteres
  const arrayInvertido = arrayDeCaracteres.reverse();
  
  // Volver a unir el array invertido en un string
  const textoInvertido = arrayInvertido.join('');
  
  return textoInvertido;
}

module.exports = invertirTexto;
