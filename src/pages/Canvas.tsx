import { Store, Truck, Smartphone, Package } from "lucide-react";
import { useState } from "react";
import { FadeInSection } from "../components/FadeInSection";
import { motion } from "framer-motion";

export const Canvas = () => {
  const titulo = "Perfil del Cliente";
  const [imagenModal, setImagenModal] = useState<string | null>(null);

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
  text-center
  text-5xl
  md:text-7xl
  font-extrabold
  mb-18
"
        >
          <span className="sweet-neon">Canvas</span>{" "}
          <span className="text-gray-500 dark:text-gray-300 de-neon">de</span>{" "}
          <span className="donuts-neon">Negocio</span>
        </motion.h1>

        {/* Perfil del Cliente */}
        <FadeInSection direction="left">
          <div
            className="
        flex
        flex-col
        md:flex-row
        items-center
        gap-8
        bg-white
        dark:bg-gray-900
        rounded-3xl
        shadow-xl
        p-8
        mb-10
      "
          >
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold">
                {titulo.split("").map((char, i) => (
                  <span
                    key={i}
                    className="perfil-neon-letter pb-6"
                    style={{
                      animationDelay: `${i * 0.15}s`,
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>

              <div>
                <b>
                  Con base en las respuestas de la encuesta de Sweet Donuts, el
                  perfil del cliente es:
                </b>

                <ul className="mt-4 space-y-3">
                  <li>🍩 Prefiere donas con precios entre $3.000 y $7.000.</li>
                  <li>
                    🍫 Le gustan principalmente los sabores Arequipe-Caramelo y
                    Chocolate-Vainilla.
                  </li>
                  <li>
                    ⏱️ Está dispuesto a esperar entre 5 y 15 minutos por su
                    pedido.
                  </li>
                  <li>⭐ Valora la calidad del producto.</li>
                  <li>💡 Tiene interés por sabores innovadores.</li>
                  <li>
                    ☕ Prefiere acompañar las donas con café o chocolate
                    caliente.
                  </li>
                  <li>🧪 Estaría dispuesto a probar nuevos sabores.</li>
                  <li>🌇 Consume donas principalmente en la tarde.</li>
                  <li>🏪 Suele comprarlas en panaderías y cafeterías.</li>
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <img
                src="/images/perfil_del_cliente.png"
                alt="Perfil del Cliente"
                onClick={() => setImagenModal("/images/perfil_del_cliente.png")}
                className="
    rounded-3xl
    shadow-xl
    w-full
    max-w-md
    mx-auto
    transition-all
    duration-500
    ease-in-out
    hover:shadow-pink-500/50
    hover:scale-105
    cursor-pointer
  "
              />
            </div>
          </div>
        </FadeInSection>

        {/* Segmentación */}
        <FadeInSection direction="right">
          <div
            className="
        flex
        flex-col
        md:flex-row
        items-center
        gap-8
        bg-white
        dark:bg-gray-900
        rounded-3xl
        shadow-xl
        p-8
        mb-10
      "
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Segmentación del Mercado
              </h2>

              <div className="mt-4">
                <ol className="list-decimal list-inside space-y-6">
                  <li>
                    <b>Segmentación demográfica</b>

                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>Edad: Jóvenes y adultos entre 15 y 45 años.</li>
                      <li>Género: Hombres y mujeres.</li>
                      <li>
                        Nivel socioeconómico: Estratos 2, 3 y 4, debido a la
                        preferencia por precios accesibles.
                      </li>
                      <li>
                        Ocupación: Estudiantes, empleados y trabajadores
                        independientes.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <b>Segmentación geográfica</b>

                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Personas que viven o trabajan en zonas urbanas donde
                        existan panaderías, cafeterías y puntos de venta de
                        comida rápida.
                      </li>
                      <li>
                        Principalmente consumidores de la ciudad o localidad
                        donde opera Sweet Donuts.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <b>Segmentación psicográfica</b>

                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Personas que disfrutan los postres y los productos de
                        repostería.
                      </li>
                      <li>
                        Consumidores interesados en probar sabores nuevos e
                        innovadores.
                      </li>
                      <li>
                        Clientes que valoran la calidad y la buena experiencia
                        de compra.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <b>Segmentación conductual</b>

                    <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                      <li>
                        Consumen donas principalmente en la tarde como merienda
                        o acompañamiento.
                      </li>
                      <li>
                        Prefieren acompañarlas con café o chocolate caliente.
                      </li>
                      <li>
                        Buscan productos con buena relación calidad-precio.
                      </li>
                      <li>
                        Están dispuestos a probar nuevos sabores y promociones.
                      </li>
                    </ul>
                  </li>
                </ol>

                <div className="mt-6 p-4 rounded-xl bg-pink-50 dark:bg-gray-800">
                  <h3 className="font-bold text-lg text-pink-500">
                    Mercado objetivo
                  </h3>

                  <p className="mt-2">
                    Sweet Donuts está dirigido principalmente a jóvenes y
                    adultos de entre 15 y 45 años, estudiantes, trabajadores y
                    familias que buscan productos de calidad, con sabores
                    innovadores y precios accesibles para disfrutar en cualquier
                    momento del día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Propuesta de Valor */}
        <FadeInSection direction="left">
          <div
            className="
        flex
        flex-col
        md:flex-row
        items-center
        gap-8
        bg-white
        dark:bg-gray-900
        rounded-3xl
        shadow-xl
        p-8
        mb-10
      "
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Propuesta de Valor
              </h2>

              <p>
                Ofrecemos donas frescas, deliciosas y con diferentes sabores y
                decoraciones, elaboradas con ingredientes de calidad. Brindamos
                una experiencia dulce y agradable para compartir en cualquier
                ocasión, con <b>precios accesibles y atención amable.</b>
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Canales de Distribucion */}
        <FadeInSection direction="right">
          <div
            className="
    flex
    flex-col
    md:flex-row
    items-center
    gap-8
    bg-white
    dark:bg-gray-900
    rounded-3xl
    shadow-xl
    p-8
    mb-10
  "
          >
            {/* Texto */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Canales de Distribución
              </h2>

              <p className="mb-4">
                Sweet Donuts utiliza diversos canales para llegar a sus clientes
                y facilitar la compra de sus productos.
              </p>

              <ul className="space-y-3">
                <li>🏪 Venta directa en el local.</li>

                <li>
                  ☕ Distribución a través de cafeterías y panaderías asociadas.
                </li>

                <li>📱 Promoción y atención mediante redes sociales.</li>

                <li>🚚 Entrega de pedidos mediante servicio a domicilio.</li>

                <li>📦 Pedidos personalizados para eventos y reuniones.</li>
              </ul>
            </div>

            {/* Imagen */}
            <div
              className="
    flex
    flex-wrap
    justify-center
    gap-8
  "
            >
              <div className="text-center">
                <Store size={60} />
                <p>Local</p>
              </div>

              <div className="text-center">
                <Truck size={60} />
                <p>Domicilios</p>
              </div>

              <div className="text-center">
                <Smartphone size={60} />
                <p>Redes Sociales</p>
              </div>

              <div className="text-center">
                <Package size={60} />
                <p>Eventos</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Relacion con el cliente */}
        <FadeInSection direction="left">
          <div
            className="
    flex
    flex-col
    md:flex-row-reverse
    items-center
    gap-8
    bg-white
    dark:bg-gray-900
    rounded-3xl
    shadow-xl
    p-8
    mb-10
  "
          >
            {/* Texto */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Relación con el Cliente
              </h2>

              <p className="mb-4">
                Sweet Donuts busca mantener una comunicación cercana y constante
                con sus clientes mediante canales digitales y atención
                personalizada.
              </p>

              <ul className="space-y-3">
                <li>📸 Publicación de novedades y promociones en Instagram.</li>

                <li>👍 Interacción con clientes mediante Facebook.</li>

                <li>🎥 Contenido atractivo y tendencias en TikTok.</li>

                <li>
                  💬 Atención directa y recepción de pedidos por WhatsApp.
                </li>

                <li>
                  ⭐ Seguimiento de opiniones y sugerencias de los clientes.
                </li>

                <li>🎁 Promociones especiales y programas de fidelización.</li>
              </ul>
            </div>

            {/* Imagen */}
            <div className="flex-1">
              <img
                src="/images/relacion_cliente.jfif"
                alt="Relación con el Cliente"
                className="
        rounded-3xl
        shadow-xl
        w-full
        max-w-md
        mx-auto
        transition-all
    duration-500
    ease-in-out
    hover:shadow-pink-500/50
    hover:scale-105
    cursor-pointer
      "
              />
            </div>
          </div>
        </FadeInSection>

        {/* Fuentes de Ingreso */}
        <FadeInSection direction="right">
          <div
            className="
    flex
    flex-col
    md:flex-row
    items-center
    gap-8
    bg-white
    dark:bg-gray-900
    rounded-3xl
    shadow-xl
    p-8
    mb-10
  "
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Fuentes de Ingreso
              </h2>

              <p className="mb-4">
                Sweet Donuts obtiene ingresos principalmente por la venta de
                donas y productos relacionados.
              </p>

              <ul className="space-y-3">
                <li>🍩 Venta individual de donas.</li>

                <li>
                  📦 Cajas de donas para compartir en reuniones y eventos.
                </li>

                <li>
                  🎉 Pedidos personalizados para cumpleaños y celebraciones.
                </li>

                <li>☕ Combos de donas acompañadas con bebidas.</li>

                <li>
                  🏢 Posibles convenios con cafeterías y negocios locales.
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <img
                src="/images/fuentes_de_ingreso.jfif"
                alt="Fuentes de Ingreso"
                className="
        rounded-3xl
        shadow-xl
        w-full
        max-w-md
        mx-auto
        size-70
        transition-all
    duration-500
    ease-in-out
    hover:shadow-pink-500/50
    hover:scale-105
    cursor-pointer
      "
              />
            </div>
          </div>
        </FadeInSection>

        {/* Recursos */}
        <FadeInSection direction="left">
          <div
            className="
    flex
    flex-col
    md:flex-row-reverse
    items-center
    gap-8
    bg-white
    dark:bg-gray-900
    rounded-3xl
    shadow-xl
    p-8
    mb-10
  "
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Recursos
              </h2>

              <ul className="space-y-3">
                <li>
                  👥 Los 4 socios fundadores que aportan trabajo y
                  conocimientos.
                </li>

                <li>🍩 Recetas y procesos de elaboración de las donas.</li>

                <li>📱 Redes sociales y WhatsApp para promoción y ventas.</li>

                <li>🧁 Materias primas e ingredientes.</li>

                <li>🏠 Espacio de trabajo para la producción.</li>

                <li>
                  💰 Posibles patrocinadores o inversionistas para financiar el
                  crecimiento.
                </li>
              </ul>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Imagen principal */}
                <img
                  src="/images/ingredientes.jfif"
                  alt="Ingredientes"
                  className="
        w-full
        h-110
        object-cover
        rounded-3xl
        shadow-xl
        transition-all
    duration-500
    ease-in-out
    hover:shadow-pink-500/50
    hover:scale-105
    cursor-pointer
      "
                />

                {/* Imagen superpuesta */}
                <img
                  src="/images/donas_para_negocio.jfif"
                  alt="Donas para negocio"
                  className="
  absolute
  bottom-0
  right-0
  w-1/2
  h-1/2
  object-cover
  rounded-3xl
  shadow-2xl
  border-4
  border-white
  dark:border-gray-900
  translate-x-0
translate-y-0
md:translate-x-6
md:translate-y-6
  hover:scale-105
  transition-all
  duration-300
"
                />
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Actividades */}
        <FadeInSection direction="right">
          <div
            className="
    flex
    flex-col
    md:flex-row
    items-center
    gap-8
    bg-white
    dark:bg-gray-900
    rounded-3xl
    shadow-xl
    p-8
    mb-10
  "
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">
                Actividades
              </h2>

              <ul className="space-y-3">
                <li>👨‍🍳 Elaboración diaria de donas.</li>

                <li>🛒 Compra y control de ingredientes e insumos.</li>

                <li>📸 Creación de contenido para redes sociales.</li>

                <li>💬 Atención de pedidos por WhatsApp.</li>

                <li>🚚 Entrega de pedidos a clientes.</li>

                <li>⭐ Desarrollo de nuevos sabores y promociones.</li>
              </ul>
            </div>

            <div className="flex-1">
              <img
                src="/images/actividades.jfif"
                alt="Actividades Clave"
                className="
        rounded-3xl
        shadow-xl
        w-full
        max-w-md
        mx-auto
        duration-500
    ease-in-out
    hover:shadow-pink-500/50
    hover:scale-105
    cursor-pointer
      "
              />
            </div>
          </div>
        </FadeInSection>

        {/* Socios */}
        <FadeInSection direction="left">
          <div
            className="
    flex
    flex-col
    md:flex-row-reverse
    items-center
    gap-8
    bg-white
    dark:bg-gray-900
    rounded-3xl
    shadow-xl
    p-8
    mb-10
  "
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-pink-500 mb-4">Socios</h2>

              <ul className="space-y-3">
                <li>
                  👥 Los 4 socios fundadores encargados de la operación y
                  gestión del negocio.
                </li>

                <li>
                  🌾 Proveedores de harina, azúcar, chocolate y demás
                  ingredientes.
                </li>

                <li>
                  📦 Proveedores de empaques y materiales de presentación.
                </li>

                <li>
                  ☕ Cafeterías y panaderías interesadas en comercializar
                  nuestras donas.
                </li>

                <li>
                  💰 Patrocinadores, inversionistas o entidades de apoyo al
                  emprendimiento.
                </li>

                <li>
                  📱 Plataformas digitales y redes sociales que facilitan la
                  promoción de la marca.
                </li>
              </ul>
            </div>

            <div className="flex-1">
              <img
                src="/images/socios.jpeg"
                alt="Socios Clave"
                className="
        rounded-3xl
        shadow-xl
        w-full
        max-w-md
        mx-auto
        duration-500
    ease-in-out
    hover:shadow-pink-500/50
    hover:scale-105
    cursor-pointer
      "
              />
            </div>
          </div>
        </FadeInSection>
      </div>

      {imagenModal && (
        <div
          className="
      fixed
      inset-0
      bg-black/80
      flex
      items-center
      justify-center
      z-50
      p-4
    "
          onClick={() => setImagenModal(null)}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setImagenModal(null)}
            className="
        absolute
        top-6
        right-6
        text-white
        text-5xl
        font-bold
        hover:text-pink-400
        transition
        cursor-pointer
      "
          >
            ×
          </button>

          {/* Imagen */}
          <img
            src={imagenModal}
            alt="Vista ampliada"
            className="
        max-w-[95vw]
        max-h-[90vh]
        rounded-2xl
        shadow-2xl
      "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};
