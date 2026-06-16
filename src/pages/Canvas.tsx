export const Canvas = () => {
  const titulo = "Perfil del Cliente";

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1
          className="
    text-center
    text-5xl
    md:text-7xl
    font-extrabold
    mb-12
    select-none
  "
        >
          <span className="sweet-neon">Canvas</span>{" "}
          <span className="de-neon">de</span>{" "}
          <span className="donuts-neon">Negocio</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Perfil del Cliente */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-extrabold">
              {titulo.split("").map((char, i) => (
                <span
                  key={i}
                  className="perfil-neon-letter"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            <ul className="space-y-2">
              <li>🎯 Estudiantes</li>
              <li>🎯 Trabajadores</li>
              <li>🎯 Familias</li>
              <li>🎯 Amantes de los postres</li>
            </ul>
          </div>

          {/* Segmentación */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Segmentación del Mercado
            </h2>

            <ul className="space-y-2">
              <li>📍 Bogotá</li>
              <li>👥 15 - 45 años</li>
              <li>💰 Estratos 2 - 5</li>
              <li>🍩 Consumidores de snacks y postres</li>
            </ul>
          </div>

          {/* Propuesta de Valor */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Propuesta de Valor
            </h2>

            <p>
              Donas artesanales frescas, personalizables y accesibles,
              elaboradas con ingredientes de calidad y sabores innovadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
