const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código: ayuda gpt

  let contador = 0; // Inicializamos el contador

  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) { // Verificamos que la propiedad es del objeto y no heredada
      contador++; // Incrementamos el contador
    }
  }

  return contador; // Retornamos el total de propiedades
};

module.exports = contarPropiedades;
