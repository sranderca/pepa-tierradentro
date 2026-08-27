import Image from "next/image";

export default async function Home() {
  // Función para pedir los datos a Strapi
  async function getAventureros() {
    try {
      const res = await fetch(
        "http://localhost:1337/api/aventureros?populate=*",
        {
          cache: "no-store", // Desactiva el caché para ver los cambios apenas publiques en Strapi
        },
      );
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error("Error al traer aventureros:", error);
      return [];
    }
  }
  const aventureros = await getAventureros();

  return (
    <main className="min-h-screen">
      {/* SECCIÓN HERO (PORTADA) */}
      <section className="relative w-full h-[85vh] flex items-center overflow-hidden bg-segovia-black">
        {/* Imagen de Fondo de Pepa */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/pepa-herofull.png"
            alt="Pepa en Tierradentro"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </div>

        {/* Gradiente inteligente: Transparente en la cara de Pepa (izq), oscuro en el texto (der) en PC. Oscuro parejo en móviles. */}
        <div className="absolute inset-0 bg-segovia-black/60 md:bg-transparent md:bg-gradient-to-r md:from-transparent md:from-40% md:to-segovia-black/95 z-0" />

        {/* Contenido de la Portada - Alineado a la derecha en PC para dejar ver a Pepa */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-center md:justify-end">
          <div className="max-w-xl text-center md:text-right flex flex-col items-center md:items-end">
            <span className="bg-pepa-tan/90 text-segovia-black text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 shadow-sm">
              La Guía de Cuatro Patas de Tierradentro
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-md mb-6 leading-tight">
              Tu Aventura Comienza <br className="hidden md:inline" /> Con{" "}
              <span className="text-pepa-tan">Pepa</span>
            </h1>
            <p className="text-lg md:text-xl text-misty-cloud/95 font-medium mb-8 drop-shadow-lg md:pl-8">
              Conoce a la perrita callejera que se convirtió en el alma del
              parque arqueologico de Tierradentro, acompaña a los turistas en
              los hipogeos y ayuda a proteger a más perritos de la zona.
            </p>

            {/* Botón de Donar */}
            <a
              href="#donaciones"
              className="bg-terracotta-earth hover:bg-terracotta-earth/90 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Donar para Alimento y Cuidados 🐾
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN LA HISTORIA DE PEPA */}

      <section className="py-20 bg-misty-cloud px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Foto de la historia */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/pepa-parque.jpg"
                alt="Pepa en la Vereda El Parque"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Texto de la historia */}
            <div className="w-full md:w-1/2 space-y-6 text-segovia-black">
              <h2 className="text-4xl font-black text-tierradentro-green mb-4">
                De perrita perdida a la aventurera favorita de los turistas
              </h2>
              <p className="text-lg leading-relaxed">
                Hace aproximadamente mas de un año, Pepa llegó de la nada a una
                casa en la Vereda El Parque. Estaba flaquita, asustada y con
                mucha hambre. Poco a poco, con un platito de comida en la
                entrada, se fue ganando la confianza y el corazón de la familia
                hasta quedarse para siempre.
              </p>
              <p className="text-lg leading-relaxed">
                Pero Pepa tiene alma de aventurera. Su espíritu callejero y
                amigable la llevó a seguir a los guías turísticos hacia el
                parque arqueológico y los hipogeos. Hoy en día, es la mascota de
                toda la comunidad y la acompañante favorita de los turistas que
                visitan Tierradentro.
              </p>
              <div className="pt-4 border-t border-pepa-tan/30 mt-6">
                <p className="text-lg font-bold text-terracotta-earth">
                  Ahora, el cariño que recibe Pepa se transforma en ayuda para
                  los perritos que siguen en la calle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN EL PROPÓSITO */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-12 border-y border-pepa-tan/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            {/* Foto del propósito */}
            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Ojo: aquí te dejé pepa-segovia.jpg para que no se repita la foto de la historia */}
              <Image
                src="/pepa-parque2.jpg"
                alt="Pepa en el parque arqueológico de Tierradentro"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Texto del propósito alineado a la izquierda */}
            <div className="w-full md:w-1/2 space-y-6 text-segovia-black">
              <h2 className="text-4xl font-black text-tierradentro-green mb-4">
                Un propósito con huellas
              </h2>
              <p className="text-lg leading-relaxed">
                Así como Pepa llegó un día buscando refugio y con hambre, hoy
                hay muchos perritos viviendo la misma realidad.
              </p>
              <p className="text-lg leading-relaxed">
                Ella tuvo la suerte de encontrar un hogar en la Vereda El Parque
                y convertirse en la aventurera que todos conocen, pero sus
                amigos de cuatro patas aún siguen en las calles.
              </p>
              <div className="pt-4 border-t border-pepa-tan/30 mt-6">
                <p className="text-lg font-bold text-terracotta-earth">
                  Queremos transformar todo el amor que los turistas le dan a
                  Pepa en alimento, atención veterinaria y esperanza para los
                  perritos menos afortunados de la región.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN GALERÍA DE AVENTUREROS */}
      <section className="py-20 bg-misty-cloud px-4 sm:px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-segovia-black mb-4">
              Galería de Aventureros 📸
            </h2>
            <p className="text-lg text-segovia-black/80 max-w-2xl mx-auto">
              Los amigos que Pepa ha hecho en el camino. ¡Haz tu donación,
              envíanos tu foto por WhatsApp y únete a nuestra manada!
            </p>
          </div>

          {/* Cuadrícula de fotos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aventureros.map((item: any) => {
              // 1. En Strapi v5 los datos vienen directos, ya no usan "attributes"
              // 2. Usamos los nombres exactos que le pusiste a la colección
              const { name, message, image } = item;

              // 3. Strapi v5 también simplificó la ruta de la imagen, ya no usa data.attributes
              const fotoUrl = image?.url
                ? `http://localhost:1337${image.url}`
                : "/pepa-segovia.jpg"; // Foto de respaldo

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform transition duration-300 hover:-translate-y-2 group flex flex-col"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-gray-200">
                    <Image
                      src={fotoUrl}
                      alt={`Foto de ${name} con Pepa`}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 relative flex-grow flex flex-col justify-center">
                    <div className="absolute -top-6 right-8 bg-tierradentro-green text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md text-3xl font-serif leading-none pt-2">
                      ❝
                    </div>

                    <p className="text-segovia-black/90 italic mb-6 text-lg leading-relaxed">
                      "{message}"
                    </p>
                    <p className="text-terracotta-earth font-bold text-sm mt-auto uppercase tracking-wide">
                      — {name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECCIÓN DE DONACIONES Y CONTACTO */}
      <section
        id="donaciones"
        className="py-20 bg-pepa-tan/10 px-4 sm:px-6 lg:px-12"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black text-segovia-black mb-6">
            ¡Súmate a la Manada! 🐾
          </h2>
          <p className="text-lg text-segovia-black/80 mb-12 max-w-2xl mx-auto">
            Tu aporte va directo a la compra de concentrado y atención
            veterinaria para los perritos callejeros de la zona. Escoge el medio
            que prefieras:
          </p>

          {/* Tarjetas de Pago */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            {/* Tarjeta Nequi */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex-1 transform transition duration-300 hover:scale-105">
              <div className="bg-[#210049] text-white font-bold text-xl py-2 px-6 rounded-xl inline-block mb-4 shadow-md">
                Nequi
              </div>
              <p className="text-gray-500 text-sm mb-2 font-medium">
                Número de Nequi:
              </p>
              <p className="text-3xl font-black text-segovia-black">
                321 624 2011
              </p>
              <p className="text-xs text-gray-400 mt-4">
                *A nombre de: Ana Cielito Guevara
              </p>
            </div>

            {/* Tarjeta Bre-B */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex-1 transform transition duration-300 hover:scale-105">
              <div className="bg-[#0070A8] text-white font-bold text-xl py-2 px-6 rounded-xl inline-block mb-4 shadow-md">
                Bre-B
              </div>
              <p className="text-gray-500 text-sm mb-2 font-medium">
                Llave Bre-B:
              </p>
              <p className="text-3xl font-black text-segovia-black">
                321 624 2011
              </p>
              <p className="text-xs text-gray-400 mt-4">
                *Transferencia directa sin costo
              </p>
            </div>
          </div>

          {/* Botón Dinámico de WhatsApp */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 max-w-2xl mx-auto relative overflow-hidden">
            {/* Un pequeño adorno de color en el borde superior de la tarjeta */}
            <div className="absolute top-0 left-0 w-full h-2 bg-tierradentro-green"></div>

            <h3 className="text-2xl font-bold text-tierradentro-green mb-4">
              ¿Ya hiciste tu donación?
            </h3>
            <p className="text-segovia-black/80 mb-8 text-lg">
              Envíale el comprobante a mis papás por WhatsApp junto con tu foto
              con Pepa para aparecer en nuestra{" "}
              <strong>Galería de Aventureros</strong>.
            </p>

            {/* REEMPLAZA EL 573000000000 CON EL NÚMERO DE TUS PAPÁS */}
            <a
              href="https://wa.me/573216242011?text=¡Hola!%20Acabo%20de%20hacer%20una%20donación%20para%20Pepa%20y%20sus%20amigos.%20Aquí%20dejo%20mi%20comprobante%20y%20nuestra%20foto%20juntos%20🐶📸"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE57] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              {/* Ícono de WhatsApp en SVG para que cargue súper rápido */}
              <svg
                className="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              Enviar Comprobante y Foto
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN FOOTER */}
      <footer className="bg-segovia-black text-misty-cloud py-12 border-t-4 border-tierradentro-green mt-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Info y Ubicación */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-pepa-tan mb-2">Pepa 🐾</h3>
            <p className="text-sm text-misty-cloud/70 leading-relaxed">
              Vereda El Parque <br />
              Tierradentro, Cauca, Colombia
            </p>
          </div>

          {/* Mensaje central */}
          <div className="text-center max-w-sm">
            <p className="text-sm text-misty-cloud/90 italic">
              "Un perrito a la vez, transformando la experiencia de todos los
              que nos visitan."
            </p>
          </div>

          {/* Créditos del creador */}
          <div className="text-center md:text-right">
            <p className="text-xs text-misty-cloud/60 mb-1">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
            <p className="text-xs text-misty-cloud/40">
              Desarrollado con 🤎 por Anderson Calderón Guevara
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
