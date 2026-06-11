export const Presupuesto = () => {

  const gastos = [
    {
      concepto: "Vainilla",
      cantidad: 20,
      costo: 3000,
    },
    {
      concepto: "Chocolate",
      cantidad: 10,
      costo: 3000,
    },
    {
      concepto: "Arequipe",
      cantidad: 15,
      costo: 4000,
    },
  ];

  // Calcula el subtotal de cada producto
  const calcularCosto = (
    cantidad: number,
    costoUnitario: number
  ) => {
    return cantidad * costoUnitario;
  };

  // Calcula el total general
  const total = gastos.reduce(
    (acc, item) =>
      acc + calcularCosto(item.cantidad, item.costo),
    0
  );

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">
          Presupuesto Sweet Donuts
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <thead>
              <tr className="bg-pink-500 text-white">
                <th className="p-4 text-left">
                  Concepto
                </th>

                <th className="p-4 text-center">
                  Cantidad
                </th>

                <th className="p-4 text-center">
                  Valor Unitario
                </th>

                <th className="p-4 text-center">
                  Subtotal
                </th>
              </tr>
            </thead>

            <tbody>
              {gastos.map((item, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 hover:bg-pink-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="p-4">
                    {item.concepto}
                  </td>

                  <td className="p-4 text-center">
                    {item.cantidad}
                  </td>

                  <td className="p-4 text-center">
                    $
                    {item.costo.toLocaleString(
                      "es-CO"
                    )}
                  </td>

                  <td className="p-4 text-center font-semibold text-pink-500">
                    $
                    {calcularCosto(
                      item.cantidad,
                      item.costo
                    ).toLocaleString("es-CO")}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="font-bold bg-pink-100 dark:bg-gray-800">
                <td
                  colSpan={3}
                  className="p-4 text-right"
                >
                  TOTAL GENERAL
                </td>

                <td className="p-4 text-center text-pink-600 text-xl">
                  ${total.toLocaleString("es-CO")}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};