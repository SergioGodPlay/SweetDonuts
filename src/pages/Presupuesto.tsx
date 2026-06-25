import { useState } from "react";
import { motion } from "framer-motion";

export const Presupuesto = () => {
  const [productos, setProductos] = useState([
    {
      concepto: "Donas de Vainilla",
      cantidad: 250,
      valorUnitario: 3000,
      costoProduccion: 1800,
    },
    {
      concepto: "Donas de Chocolate",
      cantidad: 250,
      valorUnitario: 3000,
      costoProduccion: 1900,
    },
    {
      concepto: "Donas de Arequipe",
      cantidad: 300,
      valorUnitario: 4000,
      costoProduccion: 2500,
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
      valor: 0,
    },
    {
      concepto: "Otros gastos administrativos",
      valor: 100000,
    },
  ]);

  const calcularSubtotal = (cantidad: number, valorUnitario: number) =>
    cantidad * valorUnitario;

  const calcularGananciaUnidad = (
    valorUnitario: number,
    costoProduccion: number,
  ) => valorUnitario - costoProduccion;

  const calcularGananciaTotal = (
    cantidad: number,
    valorUnitario: number,
    costoProduccion: number,
  ) => cantidad * calcularGananciaUnidad(valorUnitario, costoProduccion);

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

        <div className="">
          <table className="w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl">
            <thead>
              <tr className="bg-pink-500 text-white">
                <th className="p-4">Categoría</th>
                <th className="p-4">Concepto</th>
                <th className="p-4">Cantidad</th>
                <th className="p-4">Valor Unitario</th>
                <th className="p-4">Costo Producción</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4">Ganancia</th>
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

                  <td className="p-4">
                    <input
                      type="number"
                      value={item.costoProduccion}
                      onChange={(e) => {
                        const nuevos = [...productos];

                        nuevos[index].costoProduccion = Number(e.target.value);

                        setProductos(nuevos);
                      }}
                      className="
      w-32
      border
      rounded-lg
      p-2
      text-center
      dark:bg-gray-800
    "
                    />
                  </td>

                  <td className="p-4 font-semibold text-center text-pink-500">
                    {formatoCOP(
                      calcularSubtotal(item.cantidad, item.valorUnitario),
                    )}
                  </td>

                  <td className="p-4 text-center">
                    <div className="relative inline-block group">
                      <span
                        className="
        px-3
        py-1
        rounded-full
        bg-green-100
        text-green-600
        font-semibold
        cursor-help
      "
                      >
                        {formatoCOP(
                          calcularGananciaUnidad(
                            item.valorUnitario,
                            item.costoProduccion,
                          ),
                        )}
                      </span>

                      {/* Tooltip */}
                      <div
                        className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-full
        mb-3
        w-72
        rounded-xl
        bg-gray-900
        text-white
        p-4
        shadow-xl
        opacity-0
        invisible
        group-hover:opacity-100
        group-hover:visible
        transition-all
        duration-300
        z-50
      "
                      >
                        <p className="font-bold mb-2">{item.concepto}</p>

                        <p>Precio venta: {formatoCOP(item.valorUnitario)}</p>

                        <p>
                          Costo producción: {formatoCOP(item.costoProduccion)}
                        </p>

                        <hr className="my-2 border-gray-700" />

                        <p>Ganancia por unidad:</p>

                        <p className="font-bold text-green-400">
                          {formatoCOP(
                            calcularGananciaUnidad(
                              item.valorUnitario,
                              item.costoProduccion,
                            ),
                          )}
                        </p>

                        <hr className="my-2 border-gray-700" />

                        <p>Cantidad vendida: {item.cantidad}</p>

                        <p className="font-bold text-yellow-400">
                          Ganancia total:{" "}
                          {formatoCOP(
                            calcularGananciaTotal(
                              item.cantidad,
                              item.valorUnitario,
                              item.costoProduccion,
                            ),
                          )}
                        </p>
                      </div>
                    </div>
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
                <td colSpan={6} className="p-4">
                  Total Ventas
                </td>
                <td className="p-4 text-center">{formatoCOP(totalVentas)}</td>
              </tr>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={6} className="p-4">
                  Total Costos Variables
                </td>
                <td className="p-4 text-center">
                  {formatoCOP(totalVariables)}
                </td>
              </tr>

              <tr className="bg-pink-100 dark:bg-gray-800 font-bold">
                <td colSpan={6} className="p-4">
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
                <td colSpan={6} className="p-4">
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
