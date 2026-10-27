// Lógica de la aplicación Comparador de Súper
// Funciona sin servidor, solo con archivos locales

// Función para normalizar texto: quitar mayúsculas, tildes y espacios extra
function normalizarTexto(texto) {
  if (!texto) return "";
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Quita las tildes
    .trim();
}

// Función para formatear precio en pesos colombianos
function formatearPrecio(precio) {
  if (precio === null || precio === undefined) {
    return null;
  }
  // Formatea sin decimales como en el ejemplo ($4.500)
  return "$" + precio.toLocaleString("es-CO");
}

// Función para encontrar el precio más barato y el más caro
function analizarPrecios(producto) {
  const preciosValidos = [];
  
  // Revisar cada supermercado
  if (producto.precios.exito && producto.precios.exito.precio !== null && producto.precios.exito.precio !== undefined) {
    preciosValidos.push({
      supermercado: "Éxito",
      precio: producto.precios.exito.precio,
      fecha: producto.precios.exito.fecha,
      clave: "exito"
    });
  }
  
  if (producto.precios.d1 && producto.precios.d1.precio !== null && producto.precios.d1.precio !== undefined) {
    preciosValidos.push({
      supermercado: "D1",
      precio: producto.precios.d1.precio,
      fecha: producto.precios.d1.fecha,
      clave: "d1"
    });
  }
  
  if (producto.precios.olimpica && producto.precios.olimpica.precio !== null && producto.precios.olimpica.precio !== undefined) {
    preciosValidos.push({
      supermercado: "Olímpica",
      precio: producto.precios.olimpica.precio,
      fecha: producto.precios.olimpica.fecha,
      clave: "olimpica"
    });
  }
  
  if (preciosValidos.length === 0) {
    return {
      preciosValidos: [],
      precioMinimo: null,
      precioMaximo: null,
      diferencia: 0
    };
  }
  
  let precioMinimo = preciosValidos[0].precio;
  let precioMaximo = preciosValidos[0].precio;
  let indiceMin = 0;
  let indiceMax = 0;
  
  for (let i = 1; i < preciosValidos.length; i++) {
    if (preciosValidos[i].precio < precioMinimo) {
      precioMinimo = preciosValidos[i].precio;
      indiceMin = i;
    }
    if (preciosValidos[i].precio > precioMaximo) {
      precioMaximo = preciosValidos[i].precio;
      indiceMax = i;
    }
  }
  
  const diferencia = precioMaximo - precioMinimo;
  
  return {
    preciosValidos: preciosValidos,
    precioMinimo: precioMinimo,
    precioMaximo: precioMaximo,
    diferencia: diferencia,
    indiceMinimo: indiceMin
  };
}

// Función para mostrar productos en la lista
function mostrarProductos(productosAMostrar) {
  const listaProductosDiv = document.getElementById("lista-productos");
  const tituloResultados = document.getElementById("titulo-resultados");
  
  // Limpiar la lista
  listaProductosDiv.innerHTML = "";
  
  if (productosAMostrar.length === 0) {
    tituloResultados.textContent = "Sin resultados";
    listaProductosDiv.innerHTML = '<div class="sin-resultados">No se encontraron productos con ese nombre.<br>Intenta con otra palabra.</div>';
    return;
  }
  
  // Cambiar título
  if (document.getElementById("buscador").value.trim() === "") {
    tituloResultados.textContent = "Productos de ejemplo";
  } else {
    tituloResultados.textContent = "Resultados de búsqueda";
  }
  
  // Mostrar cada producto
  for (let i = 0; i < productosAMostrar.length; i++) {
    const producto = productosAMostrar[i];
    const analisis = analizarPrecios(producto);
    
    // Crear tarjeta del producto
    const productoCard = document.createElement("div");
    productoCard.className = "producto-card";
    
    // Nombre del producto
    const nombreProducto = document.createElement("div");
    nombreProducto.className = "producto-nombre";
    nombreProducto.textContent = producto.nombre;
    productoCard.appendChild(nombreProducto);
    
    // Lista de precios
    const preciosLista = document.createElement("div");
    preciosLista.className = "precios-lista";
    
    // Mostrar precio de Éxito
    if (producto.precios.exito && producto.precios.exito.precio !== null && producto.precios.exito.precio !== undefined) {
      const precioItem = document.createElement("div");
      precioItem.className = "precio-item";
      if (analisis.precioMinimo === producto.precios.exito.precio && analisis.preciosValidos.length > 1) {
        precioItem.classList.add("mas-barato");
      }
      
      const nombreSuper = document.createElement("span");
      nombreSuper.className = "supermercado-nombre";
      nombreSuper.textContent = "Éxito";
      
      const valorPrecio = document.createElement("span");
      valorPrecio.className = "precio-valor";
      valorPrecio.textContent = formatearPrecio(producto.precios.exito.precio);
      
      precioItem.appendChild(nombreSuper);
      precioItem.appendChild(valorPrecio);
      preciosLista.appendChild(precioItem);
    } else {
      const precioItem = document.createElement("div");
      precioItem.className = "precio-item";
      
      const nombreSuper = document.createElement("span");
      nombreSuper.className = "supermercado-nombre";
      nombreSuper.textContent = "Éxito";
      
      const noDisp = document.createElement("span");
      noDisp.className = "no-disponible";
      noDisp.textContent = "No disponible";
      
      precioItem.appendChild(nombreSuper);
      precioItem.appendChild(noDisp);
      preciosLista.appendChild(precioItem);
    }
    
    // Mostrar precio de D1
    if (producto.precios.d1 && producto.precios.d1.precio !== null && producto.precios.d1.precio !== undefined) {
      const precioItem = document.createElement("div");
      precioItem.className = "precio-item";
      if (analisis.precioMinimo === producto.precios.d1.precio && analisis.preciosValidos.length > 1) {
        precioItem.classList.add("mas-barato");
      }
      
      const nombreSuper = document.createElement("span");
      nombreSuper.className = "supermercado-nombre";
      nombreSuper.textContent = "D1";
      
      const valorPrecio = document.createElement("span");
      valorPrecio.className = "precio-valor";
      valorPrecio.textContent = formatearPrecio(producto.precios.d1.precio);
      
      precioItem.appendChild(nombreSuper);
      precioItem.appendChild(valorPrecio);
      preciosLista.appendChild(precioItem);
    } else {
      const precioItem = document.createElement("div");
      precioItem.className = "precio-item";
      
      const nombreSuper = document.createElement("span");
      nombreSuper.className = "supermercado-nombre";
      nombreSuper.textContent = "D1";
      
      const noDisp = document.createElement("span");
      noDisp.className = "no-disponible";
      noDisp.textContent = "No disponible";
      
      precioItem.appendChild(nombreSuper);
      precioItem.appendChild(noDisp);
      preciosLista.appendChild(precioItem);
    }
    
    // Mostrar precio de Olímpica
    if (producto.precios.olimpica && producto.precios.olimpica.precio !== null && producto.precios.olimpica.precio !== undefined) {
      const precioItem = document.createElement("div");
      precioItem.className = "precio-item";
      if (analisis.precioMinimo === producto.precios.olimpica.precio && analisis.preciosValidos.length > 1) {
        precioItem.classList.add("mas-barato");
      }
      
      const nombreSuper = document.createElement("span");
      nombreSuper.className = "supermercado-nombre";
      nombreSuper.textContent = "Olímpica";
      
      const valorPrecio = document.createElement("span");
      valorPrecio.className = "precio-valor";
      valorPrecio.textContent = formatearPrecio(producto.precios.olimpica.precio);
      
      precioItem.appendChild(nombreSuper);
      precioItem.appendChild(valorPrecio);
      preciosLista.appendChild(precioItem);
    } else {
      const precioItem = document.createElement("div");
      precioItem.className = "precio-item";
      
      const nombreSuper = document.createElement("span");
      nombreSuper.className = "supermercado-nombre";
      nombreSuper.textContent = "Olímpica";
      
      const noDisp = document.createElement("span");
      noDisp.className = "no-disponible";
      noDisp.textContent = "No disponible";
      
      precioItem.appendChild(nombreSuper);
      precioItem.appendChild(noDisp);
      preciosLista.appendChild(precioItem);
    }
    
    productoCard.appendChild(preciosLista);
    
    // Mostrar diferencia si hay al menos dos precios disponibles
    if (analisis.preciosValidos.length >= 2 && analisis.diferencia > 0) {
      const diferenciaDiv = document.createElement("div");
      diferenciaDiv.className = "diferencia-precio";
      diferenciaDiv.textContent = "Diferencia: " + formatearPrecio(analisis.diferencia) + " frente al más caro";
      productoCard.appendChild(diferenciaDiv);
    }
    
    // Mostrar fecha de actualización (tomar la más reciente o cualquier una)
    let fechaMostrar = "";
    if (producto.precios.exito && producto.precios.exito.fecha) {
      fechaMostrar = producto.precios.exito.fecha;
    } else if (producto.precios.d1 && producto.precios.d1.fecha) {
      fechaMostrar = producto.precios.d1.fecha;
    } else if (producto.precios.olimpica && producto.precios.olimpica.fecha) {
      fechaMostrar = producto.precios.olimpica.fecha;
    }
    
    if (fechaMostrar) {
      const fechaDiv = document.createElement("div");
      fechaDiv.className = "fecha-actualizacion";
      fechaDiv.textContent = "Última actualización: " + fechaMostrar;
      productoCard.appendChild(fechaDiv);
    }
    
    listaProductosDiv.appendChild(productoCard);
  }
}

// Función para buscar productos
function buscarProductos() {
  const textoBuscado = document.getElementById("buscador").value;
  const textoNormalizado = normalizarTexto(textoBuscado);
  
  if (textoNormalizado === "") {
    // Si no hay búsqueda, mostrar todos los productos (lista de ejemplo)
    mostrarProductos(listaPrecios);
    return;
  }
  
  // Filtrar productos que coincidan
  const productosFiltrados = [];
  for (let i = 0; i < listaPrecios.length; i++) {
    const nombreNormalizado = normalizarTexto(listaPrecios[i].nombre);
    if (nombreNormalizado.indexOf(textoNormalizado) !== -1) {
      productosFiltrados.push(listaPrecios[i]);
    }
  }
  
  mostrarProductos(productosFiltrados);
}

// Inicializar la aplicación cuando el DOM esté listo
function inicializar() {
  const buscador = document.getElementById("buscador");
  
  // Mostrar todos los productos al cargar la página
  mostrarProductos(listaPrecios);
  
  // Escuchar eventos en el buscador
  buscador.addEventListener("input", buscarProductos);
}

// Ejecutar inicialización cuando cargue el documento
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", inicializar);
} else {
  inicializar();
}
