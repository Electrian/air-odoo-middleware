export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { pedido } = req.body;

  // Simulamos respuesta de Air Computers
  const productos = [
    { nombre: "Notebook Lenovo", precioUSD: 500 },
    { nombre: "Monitor Samsung", precioUSD: 150 }
  ];

  const margen = 1.3;
  const cotizados = productos.map(p => ({
    ...p,
    precioFinal: (p.precioUSD * margen).toFixed(2)
  }));

  // Simulamos creación en Odoo (respuesta mock)
  const odooResponse = {
    leadId: 123456,
    estado: "creado"
  };

  return res.status(200).json({
    leadOdoo: odooResponse,
    productos: cotizados,
    mensaje: `Cotización generada para pedido: ${pedido}`
  });
}
