import { useState } from "react";
import { motion } from "framer-motion";

export const Presupuesto = () => {
  const [productos, setProductos] = useState([
    {
      concepto: "Donas de Vainilla",
      cantidad: 200,
      valorUnitario: 3000,
    },
    {
      concepto: "Donas de Chocolate",
      cantidad: 200,
      valorUnitario: 3000,
    },
    {
      concepto: "Donas de Arequipe",
      cantidad: 300,
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

  const calcularSubtotal = (cantidad: number, valorUnitario: number) =>
    cantidad * valorUnitario;

  const formatoCOP = (valor: number) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(valor);

  const totalVentas = productos.reduce(
    (acc, item) => acc + calcularSubtotal(item.cantidad, item.valorUnitario),
    0,
  );

  const totalVariables = costosVariables.reduce(
    (acc, item) => acc + item.valor,
    0,
  );

  const totalFijos = costosFijos.reduce((acc, item) => acc + item.valor, 0);

  const utilidad = totalVentas - totalVariables - totalFijos;

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
    presupuesto-neon
    text-4xl
    md:text-5xl
    font-bold
    text-center
    mb-10
  "
        >
          Presupuesto Sweet Donuts
        </motion.h1>

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
                <tr key={index} className="border-b dark:border-gray-700">
                  <td className="p-4">Ventas</td>

                  <td className="p-4">
                    <input
                      type="text"
                      value={item.concepto}
                      onChange={(e) => {
                        const nuevos = [...productos];
                        nuevos[index].concepto = e.target.value;
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
                        nuevos[index].cantidad = Number(e.target.value);
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
                        nuevos[index].valorUnitario = Number(e.target.value);
                        setProductos(nuevos);
                      }}
                      className="w-32 border rounded-lg p-2 text-center dark:bg-gray-800"
                    />
                  </td>

                  <td className="p-4 font-semibold text-center text-pink-500">
                    {formatoCOP(
                      calcularSubtotal(item.cantidad, item.valorUnitario),
                    )}
                  </td>
                </tr>
              ))}

              {/* COSTOS VARIABLES */}
              {costosVariables.map((item, index) => (
                <tr
                  key={`variable-${index}`}
                  className="border-b dark:border-gray-700"
                >
                  <td className="p-4">Costos Variables</td>

                  <td className="p-4">{item.concepto}</td>

                  <td>-</td>
                  <td>-</td>

                  <td className="p-4">
                    <input
                      type="text"
                      value={formatoCOP(item.valor)}
                      onChange={(e) => {
                        const numero = Number(
                          e.target.value.replace(/\D/g, ""),
                        );

                        const nuevos = [...costosVariables];
                        nuevos[index].valor = numero;

                        setCostosVariables(nuevos);
                      }}
                      className="
      w-40
      border
      rounded-lg
      p-2
      text-center
      dark:bg-gray-800
    "
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
                  <td className="p-4">Costos Fijos</td>

                  <td className="p-4">{item.concepto}</td>

                  <td>-</td>
                  <td>-</td>

                  <td className="p-4">
                    <input
                      type="text"
                      value={formatoCOP(item.valor)}
                      onChange={(e) => {
                        const numero = Number(
                          e.target.value.replace(/\D/g, ""),
                        );

                        const nuevos = [...costosFijos];
                        nuevos[index].valor = numero;

                        setCostosFijos(nuevos);
                      }}
                      className="
      w-40
      border
      rounded-lg
      p-2
      text-center
      dark:bg-gray-800
    "
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
                <td className="p-4 text-center">{formatoCOP(totalVentas)}</td>
              </tr>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={4} className="p-4">
                  Total Costos Variables
                </td>
                <td className="p-4 text-center">
                  {formatoCOP(totalVariables)}
                </td>
              </tr>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={4} className="p-4">
                  Total Costos Fijos
                </td>
                <td className="p-4 text-center">{formatoCOP(totalFijos)}</td>
              </tr>

              <tr
                className={`font-bold ${
                  utilidad >= 0
                    ? "bg-green-100 dark:bg-green-900"
                    : "bg-red-100 dark:bg-red-900"
                }`}
              >
                <td colSpan={4} className="p-4">
                  {utilidad >= 0 ? "Utilidad Esperada" : "Pérdida Esperada"}
                </td>

                <td
                  className={`p-4 text-center ${
                    utilidad >= 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatoCOP(utilidad)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};
