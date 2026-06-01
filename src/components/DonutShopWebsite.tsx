import { useState } from "react";

type Donut = {
  name: string;
  flavor: string;
  price: string;
  image: string;
  video?: string;
};

export default function DonutShopWebsite() {
  const donuts: Donut[] = [
    {
      name: "Vainilla",
      flavor:
        "Delicada, dulce y perfectamente equilibrada, ideal para los amantes de los sabores clásicos",
      price: "$3.000",
      image: "../images/vainilla.jpg",
      video: "../videos/donas_glaseadas.mp4",
    },
    {
      name: "Chocolate",
      flavor:
        "Una explosión intensa y cremosa de cacao que se derrite en cada mordida",
      price: "$3.000",
      image: "../images/chocolate.jpg",
    },
    {
      name: "Arequipe",
      flavor:
        "Rellenas y bañadas con el auténtico sabor del arequipe, suave y delicioso, que conquista desde el primer bocado",
      price: "$4.000",
      image: "../images/arequipe.jpg",
    },
  ];

  function DonutCard({ donut }: { donut: Donut }) {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="
        bg-white
        rounded-3xl
        p-6
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
      "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-60 mb-5 overflow-hidden rounded-2xl">
          {/* Imagen */}
          <img
            src={donut.image}
            alt={donut.name}
            className={`
            absolute
            inset-0
            w-full
            h-full

            transition-all
            duration-700
            ${hovered && donut.video ? "opacity-0 scale-110" : "opacity-100 scale-100"}
          `}
          />

          {/* Video */}
          {donut.video && (
            <video
              src={donut.video}
              autoPlay
              muted
              loop
              playsInline
              className={`
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-all
              duration-700
              ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
            `}
            />
          )}
        </div>

        <h3
          className="
          text-2xl
          font-bold
          mb-2
          transition-all
          duration-300
          hover:text-pink-300
          hover:[text-shadow:0_0_4px_rgba(255,182,193,0.5)]
        "
        >
          {donut.name}
        </h3>

        <p className="text-gray-600 mb-4">{donut.flavor}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-extrabold text-pink-500">
            {donut.price}
          </span>

          <button
            className="
            bg-pink-500
            text-white
            px-4
            py-2
            rounded-xl
            hover:bg-pink-600
            transition
            cursor-pointer
          "
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* HERO */}
      <section className="bg-linear-to-r from-pink-400 to-orange-300 text-white px-6 py-20">
        <h1
          className="
    group
    text-center
    text-7xl
    font-extrabold
    mb-12
    cursor-pointer
    transition-all
    duration-500
    select-none
  "
        >
          <span
            className="
      text-pink-500
      transition-all
      duration-500
      group-hover:text-pink-300
      group-hover:[text-shadow:0_0_10px_#ec4899,0_0_20px_#ec4899,0_0_40px_#ec4899]
    "
          >
            Sweet
          </span>{" "}
          <span
            className="
      text-orange-400
      transition-all
      duration-500
      group-hover:text-yellow-300
      group-hover:[text-shadow:0_0_10px_#facc15,0_0_20px_#facc15,0_0_40px_#facc15]
    "
          >
            Donuts
          </span>
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Donas irresistibles para cualquier momento{" "}
              <span className="inline-block animate-donut">🍩</span>
            </h2>

            <p className="text-lg mb-8 opacity-95">
              Donas frescas, personalizadas y llenas de sabor. Perfectas para
              compartir, regalar o darte un gusto.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-pink-500 px-6 py-3 rounded-2xl font-bold shadow-lg hover:scale-105 transition cursor-pointer">
                Hacer pedido
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-bold hover:bg-white hover:text-pink-500 transition cursor-pointer">
                Ver menú
              </button>
            </div>
          </div>

          <div className="flex justify-center overflow-hidden rounded-3xl">
            <img
              src="../images/portada.jpg"
              alt="Donas"
              className="
      rounded-3xl
      shadow-4xl
      w-full
      max-w-md
      h-120
      transition-all
      duration-500
      ease-in-out
      hover:scale-105
      hover:shadow-black cursor-pointer
    "
            />
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Creamos donas artesanales con ingredientes frescos y sabores únicos.
            Nuestro objetivo es ofrecer productos deliciosos a precios
            accesibles, con diseños personalizados y atención cercana.
          </p>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
            {donuts.map((donut, index) => (
              <DonutCard key={index} donut={donut} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMOCIÓN */}
      <section className="bg-orange-100 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Promoción Especial 🎉</h2>

          <p className="text-xl text-gray-700 mb-8">
            Compra 6 donas y recibe 2 gratis.
          </p>

          <button className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-600 transition shadow-lg cursor-pointer">
            Aprovechar oferta
          </button>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
          <h2 className="text-4xl font-bold mb-8 text-center">Contáctanos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-lg">📍 Bogotá, Colombia</p>

              <p className="mb-4 text-lg">📞 +57 300 000 0000</p>

              <p className="mb-4 text-lg">✉️ contacto@donasfelices.com</p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-3 rounded-2xl border"
              />

              <input
                type="email"
                placeholder="Tu correo"
                className="w-full px-4 py-3 rounded-2xl border"
              />

              <textarea
                placeholder="Escribe tu mensaje"
                rows={4}
                className="w-full px-4 py-3 rounded-2xl border"
              />

              <button className="w-full bg-pink-500 text-white py-3 rounded-2xl font-bold hover:bg-pink-600 transition cursor-pointer">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-pink-500 text-white py-6 text-center">
        <p>© 2026 Sweet Donuts - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
