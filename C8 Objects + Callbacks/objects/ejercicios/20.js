function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código: ayuda gpt

    // Asegúrate de que "posts" es un arreglo
    if (!Array.isArray(objetoUsuario.posts)) {
      return 0; // Retorna 0 si no hay posts
    }
  
    // Usamos reduce para sumar los likes
    return objetoUsuario.posts.reduce((totalLikes, post) => {
      return totalLikes + (post.likes || 0); // Aseguramos que likes sea un número
    }, 0);
    
}

module.exports = sumarLikesDeUsuario;
