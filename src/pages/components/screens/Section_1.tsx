import ButtonLogin from "../ButtonLogin";
import letras from "./../../../assets/image/letras_de_codeync.svg";
import letras_2 from "./../../../assets/image/letras_de_plus.svg";
import handBoard from "./../../../assets/image/handBoard.svg";
import { motion } from "framer-motion";

const Section_1 = () => {
  return (
    <main
      className="container mx-auto px-4"
      aria-label="Sección principal de Codeync"
    >
      {/* Encabezado principal */}
      <header
        className="w-full mt-16 md:mt-20 lg:mt-24"
        aria-label="Título principal"
      >
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Where Ideas Unfold in Code_
        </h1>
        <meta
          name="description"
          content="Codeync fusiona creatividad y código para crear experiencias digitales excepcionales. Superamos expectativas con soluciones innovadoras."
        />
      </header>

      {/* Descripción */}
      <section
        className="w-full flex justify-center pt-6 md:pt-8 lg:pt-10 relative"
        aria-label="Descripción de Codeync"
      >
        <p className="text-center w-11/12 md:w-4/6 lg:w-3/6 font-oxanium text-sm md:text-base lg:text-lg">
          En <strong>Codeync</strong>, fusionamos la creatividad del diseño con
          la precisión del código para dar vida a experiencias digitales
          excepcionales. Nuestra pasión es superar expectativas,{" "}
          <strong>
            ofreciendo soluciones innovadoras que trascienden lo convencional.
          </strong>
        </p>
      </section>

      {/* Botón de contacto */}
      <nav
        className="relative w-full flex justify-center mt-14 md:mt-16 lg:mt-20"
        aria-label="Iniciar proyecto"
      >
        <ButtonLogin
          direction="#contacto"
          className="absolute -bottom-10 md:-bottom-12 border-l-2 border-b-2 border-r-1 z-10 border-[#E0D9D9] py-3 px-6 md:px-10 lg:px-12 rounded-xl hover:bg-gradient-to-b from-[#C293FF] to-[#755899] text-sm md:text-base"
          content="START A PROJECT"
          aria-label="Comienza un proyecto con Codeync"
        />
      </nav>

      {/* Letras animadas */}
      <section
        className="overflow-x-hidden overflow-y-hidden mt-16 md:mt-20 mask-fade"
        aria-label="Animación de letras Codeync"
      >
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <figure className="h-40 md:h-56 lg:h-72 z-30">
            <img
              src={letras}
              alt="Animación de letras Codeync, creatividad y tecnología"
              className="h-full object-contain"
              loading="lazy"
            />
          </figure>
        </motion.div>
      </section>

      {/* Sección About */}
      <section
        id="about"
        className="flex flex-col md:flex-row w-full relative z-10 mt-12 md:mt-16"
        aria-label="Sobre nosotros"
      >
        <div className="w-full z-20 flex flex-col md:flex-row pt-6 md:pt-10 px-6 md:px-12 lg:px-20 font-oxanium">
          {/* Subtítulo */}
          <div
            className="text-sm md:text-base mb-4 md:mb-0 flex flex-col leading-[1.1]"
            aria-label="Índice de sección"
          >
            <span className="text-[#E0D9D9] opacity-35">(01)</span>
            <span className="whitespace-nowrap pr-5">About Us</span>
          </div>

          {/* Texto descriptivo */}
          <div className="w-full flex justify-center md:justify-start h-auto md:h-[481px]">
            <article
              className="w-full md:w-10/12 lg:w-8/12 text-lg md:text-2xl lg:text-3xl pt-4 md:pt-9 text-center md:text-left"
              aria-label="Descripción de la empresa"
            >
              Lo que nos distingue es nuestra capacidad para{" "}
              <strong> integrar diseño y código de manera efectiva. </strong>{" "}
              creando experiencias digitales que cautivan y sorprenden.
            </article>
          </div>
        </div>
        <figure
          className="absolute right-0 z-0"
          aria-label="Ilustración de mano con tablero"
        >
          <img
            src={handBoard}
            alt="Ilustración de mano sosteniendo un tablero de diseño y código"
            loading="lazy"
          />
        </figure>
      </section>

      {/* Letras decorativas adicionales (animadas) */}
      <section
        className="overflow-x-hidden overflow-y-hidden z-20 h-24 md:h-32 lg:h-36 relative mt-10 md:mt-16"
        aria-label="Decoración visual animada"
      >
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            className="absolute w-full object-contain"
            src={letras_2}
            alt="Decoración visual con letras y símbolos de programación"
            loading="lazy"
          />
        </motion.div>
      </section>
    </main>
  );
};

export default Section_1;
