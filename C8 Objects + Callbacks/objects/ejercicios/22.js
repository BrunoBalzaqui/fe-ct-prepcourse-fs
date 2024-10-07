function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código: ayuda gpt

     // Eliminar espacios y convertir a minúsculas
  const normalizar = (str) => str.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  
  // Normalizar ambas cadenas
  const cadena1 = normalizar(str1);
  const cadena2 = normalizar(str2);
  
  // Comparar las cadenas normalizadas
  return cadena1 === cadena2;
  
}

module.exports = esAnagrama;
