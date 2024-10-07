function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código: ayuda gpt

    // Compara la propiedad "password" del objetoUsuario con el parámetro password
    return objetoUsuario.password === password;

}

module.exports = verificarPassword;
