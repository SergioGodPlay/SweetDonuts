import { useEffect, useState } from "react";

type Donut = {
  name: string;
  flavor: string;
  price: string;
  image: string;
  video?: string;
};

export default function DonutShopWebsite() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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
      video: "../videos/donuts_chocolate.mp4",
    },
    {
      name: "Arequipe",
      flavor:
        "Rellenas y bañadas con el auténtico sabor del arequipe, suave y delicioso, que conquista desde el primer bocado",
      price: "$4.000",
      image: "../images/arequipe.jpg",
      video: "../videos/donuts_arequipe.mp4",
    },
  ];

  function DonutCard({ donut }: { donut: Donut }) {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        className="
    bg-white

    dark:bg-[#181028]

    text-gray-800
    dark:text-white

    backdrop-blur-sm

    border
    border-pink-200

    dark:border-pink-900/40

    rounded-3xl
    p-6

    shadow-[0_8px_30px_rgba(236,72,153,0.15)]

    dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]

    hover:shadow-[0_12px_40px_rgba(236,72,153,0.25)]

    dark:hover:shadow-[0_12px_40px_rgba(236,72,153,0.35)]

    transition-all
    duration-300

    hover:-translate-y-2
  "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative h-60 mb-5 overflow-hidden rounded-2xl group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}
        >
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
      duration-1000
      ease-in-out

      ${hovered ? "opacity-0 scale-110 blur-[2px]" : "opacity-100 scale-100"}
    `}
          />

          {/* Overlay */}
          <div
            className={`
      absolute
      inset-0
      bg-black/20

      transition-all
      duration-1000
      ease-in-out

      ${hovered ? "opacity-0" : "opacity-100"}
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
              preload="metadata"
              className={`
        absolute
        inset-0
        w-full
        h-full
        object-cover

        transition-all
        duration-1000
        ease-in-out

        ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
            />
          )}
        </div>

        <h3
          className="
  neon-title
  text-2xl
  font-bold
  mb-2
  text-pink-500
  dark:text-pink-300
  transition-all
  duration-300
  hover:scale-105
"
        >
          {donut.name}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4">{donut.flavor}</p>

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
    <div
      className="
    min-h-screen

    bg-rose-50

    dark:bg-[#0f0a14]

    text-gray-800
    dark:text-white

    transition-all
    duration-500
  "
    >
      {/* HERO */}
      <section
        className="
    bg-linear-to-r
    from-pink-400
    to-orange-300
    dark:from-gray-950
    dark:via-purple-950
    dark:to-pink-950
    text-white
    px-6
    py-20
    transition-all
    duration-500
  "
      >
        <h1
          className="
    text-center
    text-7xl
    font-extrabold
    mb-18
    select-none
  "
        >
          <span className="sweet-neon">Sweet</span>{" "}
          <span className="donuts-neon">Donuts</span>
        </h1>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="hero-title">
                Donas irresistibles para cualquier momento
              </span>{" "}
              <span className="inline-block donut-float">🍩</span>
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

          <div className="flex justify-center rounded-3xl">
            <img
              src="../images/portada.jpg"
              alt="Donas"
              className="
      rounded-3xl
      w-full
      max-w-md
      h-120

      transition-all
      duration-700
      ease-in-out

      hover:scale-105

      hover:shadow-[0_0_20px_rgba(236,72,153,0.6),0_0_40px_rgba(236,72,153,0.5),0_0_80px_rgba(236,72,153,0.4)]

      dark:hover:shadow-[0_0_30px_rgba(236,72,153,0.8),0_0_60px_rgba(236,72,153,0.6),0_0_120px_rgba(168,85,247,0.5)]

      cursor-pointer
    "
            />
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" />

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
      <section className="bg-orange-100 dark:bg-gray-900 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Promoción Especial 🎉</h2>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Compra 6 donas y recibe 2 gratis.
          </p>

          <button className="bg-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-pink-600 transition shadow-lg cursor-pointer">
            Aprovechar oferta
          </button>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="px-6 py-20">
        <div
          className="
    max-w-4xl
    mx-auto
    bg-white
    dark:bg-gray-900
    dark:border
    dark:border-gray-800
    rounded-3xl
    shadow-2xl
    p-10
  "
        >
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
                className="
w-full
px-4
py-3
rounded-2xl
border
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"
              />

              <input
                type="email"
                placeholder="Tu correo"
                className="
w-full
px-4
py-3
rounded-2xl
border
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"
              />

              <textarea
                placeholder="Escribe tu mensaje"
                rows={4}
                className="
w-full
px-4
py-3
rounded-2xl
border
dark:bg-gray-800
dark:border-gray-700
dark:text-white
"
              />

              <button className="w-full bg-pink-500 text-white py-3 rounded-2xl font-bold hover:bg-pink-600 transition cursor-pointer">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="
    bg-pink-500
    dark:bg-black
    border-t
    dark:border-pink-500/20
    text-white
    py-6
    text-center
  "
      >
        <p>© 2026 Sweet Donuts - Todos los derechos reservados.</p>
      </footer>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="
    fixed
    top-5
    right-5
    z-50
    w-14
    h-14
    rounded-full
    bg-white
    dark:bg-gray-800
    text-2xl
    backdrop-blur-md
    shadow-[0_0_20px_rgba(236,72,153,0.4)]
    hover:shadow-[0_0_30px_rgba(236,72,153,0.8)]
    hover:scale-110
    hover:rotate-12
    transition-all
    duration-300
    cursor-pointer
  "
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
