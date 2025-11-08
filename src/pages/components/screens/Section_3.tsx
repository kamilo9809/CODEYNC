import Card_work from "../Card_work";
import polygon_5 from "./../../../assets/designs/poligono_5.svg";
import ezzend from "./../../../assets/image/ezzend.jpg";
import synck from "./../../../assets/image/synck.jpg";
import hylls from "./../../../assets/image/hylls.svg";
import autodom from "./../../../assets/image/autodom.jpg";

const Section_3 = () => {
  return (
    <div className="h-auto relative mb-40 md:mb-80">
      <img
        className="absolute left-0 -top-[300px] md:-top-[500px] pointer-events-none"
        src={polygon_5}
        alt="poligono"
      />

      {/* Encabezado */}
      <div
        id="portfolio"
        className="w-full flex justify-center text-sm md:text-base font-oxanium px-4"
      >
        <div className="w-10/12">
          <p className="opacity-30">(01)</p>
          <p>Portafolio</p>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <div className="w-6/12 square text-3xl">
          <h2>
            <strong>Nuestro Portfolio:</strong> Donde la Innovación se Convierte
            en Realidad
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center mt-9 px-4">
        <div className="w-full md:w-10/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-10 md:gap-20 md:mt-32">
            <Card_work
              image={ezzend}
              stylebg="text-white"
              title="Ezzend"
              type="Web design"
              work="programing"
              href="https://ezzend.com"
            />
            <Card_work
              image={synck}
              stylebg=""
              title="synck"
              type="web design"
              work="programing"
              href="https://hyllsmusic/synck.com"
            />
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-10 md:gap-20">
            <Card_work
              image={hylls}
              stylebg=""
              title="hylls"
              type="web design"
              work="programing"
              href="https://hylls.club/"
            />
            <Card_work
              image={autodom}
              stylebg="text-white"
              title="autodom"
              type="web design"
              work="programing"
              href="https://mecanicoadomiciliomedellin.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
