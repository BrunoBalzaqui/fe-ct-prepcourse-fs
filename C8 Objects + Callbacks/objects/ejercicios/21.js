function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código: ayuda gpt   

  // Agrega una propiedad al objetoProducto con el nombre "calcularPrecioDescuento"
  objetoProducto.calcularPrecioDescuento = function() {
    // Declara las variables por separado
    const precio = this.precio;
    const porcentajeDeDescuento = this.porcentajeDeDescuento;

    // Calcula el descuento
    const descuento = precio * porcentajeDeDescuento;

    // Calcula el precio final
    const precioFinal = precio - descuento;

    // Retorna el precio final
    return precioFinal;
  };

  // Retorna el objeto modificado
  return objetoProducto;

}

module.exports = agregarMetodoCalculoDescuento;
