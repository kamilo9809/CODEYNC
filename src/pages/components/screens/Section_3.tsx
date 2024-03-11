import Card_work from "../Card_work";
import polygon_5 from "./../../../assets/designs/poligono_5.svg";
import ezzend from "./../../../assets/image/ezzend.jpg";
import synck from "./../../../assets/image/synck.jpg";
import hylls from "./../../../assets/image/hylls.svg";
import autodom from "./../../../assets/image/autodom.jpg";

const Section_3 = () => {
  return (
    <div className="h-auto relative">
      <img
        className="absolute left-0 -top-[500px] pointer-events-none"
        src={polygon_5}
        alt="poligono"
      />
      <div
        id="portfolio"
        className="w-full flex justify-center text-base font-oxanium"
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
        <div className="w-2/12"></div>
      </div>
      <div className="w-full flex justify-center mt-9">
        <div className="w-8/12 grid grid-cols-2 gap-16 overflow-x-hidden">
          <div className="flex flex-col mt-32 relative gap-20">
            <Card_work
              image={ezzend}
              stylebg="text-black"
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
          <div className="flex flex-col gap-20">
            <Card_work
              image={hylls}
              stylebg=""
              title="hylls"
              type="web design"
              work="programing"
              href="https://hyllsrecords.com"
            />
            <Card_work
              image={autodom}
              stylebg="text-black"
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
