function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  arrayMeses = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] == "Enero") {
      arrayMeses.push("Enero");
    } else if(array[i] == "Marzo") {
      arrayMeses.push("Marzo");
    } else if(array[i] == "Noviembre") {
      arrayMeses.push("Noviembre");
    }
  }

  if(arrayMeses.length == 3) {
    return arrayMeses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;