// Datos de productos de ejemplo para el comparador de súper
// Los precios son inventados. Estos datos pueden cambiarse sin tocar la lógica.

var listaPrecios = [
  {
    id: 1,
    nombre: "Leche entera 1L",
    categoria: "Lácteos",
    precios: {
      exito: { precio: 4500, fecha: "2026-10-20" },
      d1: { precio: 4200, fecha: "2026-10-22" },
      olimpica: { precio: 4800, fecha: "2026-10-21" }
    }
  },
  {
    id: 2,
    nombre: "Arroz blanco 500g",
    categoria: "Granos",
    precios: {
      exito: { precio: 1500, fecha: "2026-10-19" },
      d1: { precio: 1400, fecha: "2026-10-22" },
      olimpica: { precio: 1600, fecha: "2026-10-20" }
    }
  },
  {
    id: 3,
    nombre: "Huevos x12",
    categoria: "Huevos y carnes",
    precios: {
      exito: { precio: 12500, fecha: "2026-10-18" },
      d1: { precio: 11800, fecha: "2026-10-22" },
      olimpica: { precio: 12900, fecha: "2026-10-21" }
    }
  },
  {
    id: 4,
    nombre: "Aceite vegetal 1L",
    categoria: "Aceites",
    precios: {
      exito: { precio: 9800, fecha: "2026-10-20" },
      d1: { precio: 9200, fecha: "2026-10-22" },
      // Olímpica no tiene este producto
      olimpica: null
    }
  },
  {
    id: 5,
    nombre: "Chocolate en barra 90g",
    categoria: "Dulces",
    precios: {
      exito: { precio: 3200, fecha: "2026-10-17" },
      d1: { precio: 3400, fecha: "2026-10-22" },
      olimpica: { precio: 3000, fecha: "2026-10-21" }
    }
  },
  {
    id: 6,
    nombre: "Pan tajado 500g",
    categoria: "Panadería",
    precios: {
      exito: { precio: 4500, fecha: "2026-10-20" },
      d1: { precio: null, fecha: "2026-10-22" }, // no disponible
      olimpica: { precio: 4300, fecha: "2026-10-21" }
    }
  },
  {
    id: 7,
    nombre: "Azúcar blanca 1kg",
    categoria: "Granos",
    precios: {
      exito: { precio: 3800, fecha: "2026-10-19" },
      d1: { precio: 3600, fecha: "2026-10-22" },
      olimpica: { precio: 3900, fecha: "2026-10-20" }
    }
  },
  {
    id: 8,
    nombre: "Sal refinada 1kg",
    categoria: "Condimentos",
    precios: {
      exito: { precio: 1200, fecha: "2026-10-18" },
      d1: { precio: 1100, fecha: "2026-10-22" },
      olimpica: { precio: 1300, fecha: "2026-10-21" }
    }
  },
  {
    id: 9,
    nombre: "Mantequilla 200g",
    categoria: "Lácteos",
    precios: {
      exito: { precio: 8500, fecha: "2026-10-20" },
      d1: { precio: null, fecha: "2026-10-22" },
      olimpica: { precio: 8200, fecha: "2026-10-21" }
    }
  },
  {
    id: 10,
    nombre: "Atún en lata 170g",
    categoria: "Enlatados",
    precios: {
      exito: { precio: 6800, fecha: "2026-10-19" },
      d1: { precio: 6500, fecha: "2026-10-22" },
      olimpica: { precio: 7000, fecha: "2026-10-20" }
    }
  },
  {
    id: 11,
    nombre: "Jabón de baño 125g",
    categoria: "Aseo",
    precios: {
      exito: { precio: 2900, fecha: "2026-10-17" },
      d1: { precio: 2700, fecha: "2026-10-22" },
      olimpica: { precio: 3100, fecha: "2026-10-21" }
    }
  },
  {
    id: 12,
    nombre: "Café instantáneo 100g",
    categoria: "Bebidas",
    precios: {
      exito: { precio: 15900, fecha: "2026-10-20" },
      d1: { precio: 15200, fecha: "2026-10-22" },
      olimpica: null
    }
  },
  {
    id: 13,
    nombre: "Galletas surtidas 300g",
    categoria: "Dulces",
    precios: {
      exito: { precio: 5400, fecha: "2026-10-19" },
      d1: { precio: 5200, fecha: "2026-10-22" },
      olimpica: { precio: 5600, fecha: "2026-10-21" }
    }
  },
  {
    id: 14,
    nombre: "Pasta spaghetti 500g",
    categoria: "Granos",
    precios: {
      exito: { precio: 2200, fecha: "2026-10-18" },
      d1: { precio: 2100, fecha: "2026-10-22" },
      olimpica: { precio: 2300, fecha: "2026-10-20" }
    }
  },
  {
    id: 15,
    nombre: "Detergente en polvo 500g",
    categoria: "Limpieza",
    precios: {
      exito: { precio: 4800, fecha: "2026-10-20" },
      d1: { precio: 4600, fecha: "2026-10-22" },
      olimpica: { precio: 5000, fecha: "2026-10-21" }
    }
  }
];
