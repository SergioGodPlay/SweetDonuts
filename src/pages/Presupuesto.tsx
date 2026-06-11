import { useState } from "react";

export const Presupuesto = () => {
  const [productos, setProductos] = useState([
    {
      concepto: "Donas de Vainilla",
      cantidad: 20,
      valorUnitario: 3000,
    },
    {
      concepto: "Donas de Chocolate",
      cantidad: 10,
      valorUnitario: 3000,
    },
    {
      concepto: "Donas de Arequipe",
      cantidad: 15,
      valorUnitario: 4000,
    },
  ]);

  const [costosVariables, setCostosVariables] = useState([
    {
      concepto: "Harina, azúcar, levadura",
      valor: 350000,
    },
    {
      concepto: "Ingredientes para coberturas y rellenos",
      valor: 280000,
    },
    {
      concepto: "Empaques y bolsas",
      valor: 120000,
    },
  ]);

  const [costosFijos, setCostosFijos] = useState([
    {
      concepto: "Arriendo del local",
      valor: 500000,
    },
    {
      concepto: "Servicios públicos",
      valor: 200000,
    },
    {
      concepto: "Publicidad y Marketing",
      valor: 150000,
    },
    {
      concepto: "Otros gastos administrativos",
      valor: 100000,
    },
  ]);

  const [utilidadEsperada, setUtilidadEsperada] =
    useState(550000);

  const calcularSubtotal = (
    cantidad: number,
    valorUnitario: number
  ) => cantidad * valorUnitario;

  const totalVentas = productos.reduce(
    (acc, item) =>
      acc +
      calcularSubtotal(
        item.cantidad,
        item.valorUnitario
      ),
    0
  );

  const totalVariables = costosVariables.reduce(
    (acc, item) => acc + item.valor,
    0
  );

  const totalFijos = costosFijos.reduce(
    (acc, item) => acc + item.valor,
    0
  );

  const totalGeneral =
    totalVentas +
    totalVariables +
    totalFijos +
    utilidadEsperada;

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-10">
          Presupuesto Sweet Donuts
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">

            <thead>
              <tr className="bg-pink-500 text-white">
                <th className="p-4">Categoría</th>
                <th className="p-4">Concepto</th>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Valor Unitario</th>
                <th className="p-4">Subtotal</th>
              </tr>
            </thead>

            <tbody>

              {/* PRODUCTOS */}
              {productos.map((item, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700"
                >
                  <td className="p-4">Ventas</td>

                  <td className="p-4">
                    <input
                      type="text"
                      value={item.concepto}
                      onChange={(e) => {
                        const nuevos = [...productos];
                        nuevos[index].concepto =
                          e.target.value;
                        setProductos(nuevos);
                      }}
                      className="w-full border rounded-lg p-2 dark:bg-gray-800"
                    />
                  </td>

                  <td className="p-4">
                    <input
                      type="number"
                      value={item.cantidad}
                      onChange={(e) => {
                        const nuevos = [...productos];
                        nuevos[index].cantidad =
                          Number(e.target.value);
                        setProductos(nuevos);
                      }}
                      className="w-24 border rounded-lg p-2 text-center dark:bg-gray-800"
                    />
                  </td>

                  <td className="p-4">
                    <input
                      type="number"
                      value={item.valorUnitario}
                      onChange={(e) => {
                        const nuevos = [...productos];
                        nuevos[index].valorUnitario =
                          Number(e.target.value);
                        setProductos(nuevos);
                      }}
                      className="w-32 border rounded-lg p-2 text-center dark:bg-gray-800"
                    />
                  </td>

                  <td className="p-4 font-semibold text-pink-500">
                    $
                    {calcularSubtotal(
                      item.cantidad,
                      item.valorUnitario
                    ).toLocaleString("es-CO")}
                  </td>
                </tr>
              ))}

              {/* COSTOS VARIABLES */}
              {costosVariables.map((item, index) => (
                <tr
                  key={`variable-${index}`}
                  className="border-b dark:border-gray-700"
                >
                  <td className="p-4">
                    Costos Variables
                  </td>

                  <td className="p-4">
                    {item.concepto}
                  </td>

                  <td>-</td>
                  <td>-</td>

                  <td className="p-4">
                    <input
                      type="number"
                      value={item.valor}
                      onChange={(e) => {
                        const nuevos = [
                          ...costosVariables,
                        ];

                        nuevos[index].valor =
                          Number(e.target.value);

                        setCostosVariables(
                          nuevos
                        );
                      }}
                      className="w-36 border rounded-lg p-2 text-center dark:bg-gray-800"
                    />
                  </td>
                </tr>
              ))}

              {/* COSTOS FIJOS */}
              {costosFijos.map((item, index) => (
                <tr
                  key={`fijo-${index}`}
                  className="border-b dark:border-gray-700"
                >
                  <td className="p-4">
                    Costos Fijos
                  </td>

                  <td className="p-4">
                    {item.concepto}
                  </td>

                  <td>-</td>
                  <td>-</td>

                  <td className="p-4">
                    <input
                      type="number"
                      value={item.valor}
                      onChange={(e) => {
                        const nuevos = [
                          ...costosFijos,
                        ];

                        nuevos[index].valor =
                          Number(e.target.value);

                        setCostosFijos(nuevos);
                      }}
                      className="w-36 border rounded-lg p-2 text-center dark:bg-gray-800"
                    />
                  </td>
                </tr>
              ))}

            </tbody>

            <tfoot>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={4} className="p-4">
                  Total Ventas
                </td>
                <td className="p-4">
                  $
                  {totalVentas.toLocaleString(
                    "es-CO"
                  )}
                </td>
              </tr>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={4} className="p-4">
                  Total Costos Variables
                </td>
                <td className="p-4">
                  $
                  {totalVariables.toLocaleString(
                    "es-CO"
                  )}
                </td>
              </tr>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={4} className="p-4">
                  Total Costos Fijos
                </td>
                <td className="p-4">
                  $
                  {totalFijos.toLocaleString(
                    "es-CO"
                  )}
                </td>
              </tr>

              <tr className="bg-green-100 dark:bg-green-900 font-bold">
                <td colSpan={4} className="p-4">
                  Utilidad Esperada
                </td>
                <td className="p-4">
                  <input
                    type="number"
                    value={utilidadEsperada}
                    onChange={(e) =>
                      setUtilidadEsperada(
                        Number(e.target.value)
                      )
                    }
                    className="w-36 border rounded-lg p-2 text-center text-black"
                  />
                </td>
              </tr>

              <tr className="bg-pink-500 text-white text-xl font-bold">
                <td colSpan={4} className="p-4">
                  TOTAL GENERAL
                </td>
                <td className="p-4">
                  $
                  {totalGeneral.toLocaleString(
                    "es-CO"
                  )}
                </td>
              </tr>

            </tfoot>

          </table>
        </div>
      </div>
    </section>
  );
};