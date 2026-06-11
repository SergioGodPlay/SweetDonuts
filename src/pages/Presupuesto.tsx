export const Presupuesto = () => {

  const gastos = [
    {
      concepto: "Harina",
      cantidad: 20,
      costo: 80000,
    },
    {
      concepto: "Chocolate",
      cantidad: 10,
      costo: 120000,
    },
    {
      concepto: "Arequipe",
      cantidad: 15,
      costo: 90000,
    },
  ];

  const total = gastos.reduce(
    (acc, item) => acc + item.costo,
    0
  );

  return (
    <section className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">
          Presupuesto Sweet Donuts
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl">
            <thead>
              <tr className="bg-pink-500 text-white">
                <th className="p-4">Concepto</th>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Costo</th>
              </tr>
            </thead>

            <tbody>
              {gastos.map((item, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700"
                >
                  <td className="p-4">{item.concepto}</td>
                  <td className="p-4">{item.cantidad}</td>
                  <td className="p-4">
                    ${item.costo.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="font-bold bg-pink-100 dark:bg-gray-800">
                <td colSpan={2} className="p-4">
                  Total
                </td>
                <td className="p-4">
                  ${total.toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}
