const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

    // Añade la nueva propiedad al objeto
    objeto[propiedad] = valor;
    
    return objeto;
};

module.exports = agregarNuevaPropiedad;
