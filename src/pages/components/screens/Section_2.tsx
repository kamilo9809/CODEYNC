import Cards_services from "../Cards_services";
import polygon_3 from "./../../../assets/designs/poligono_3.svg";
import polygon_4 from "./../../../assets/designs/poligono_4.svg";
import icon_1 from "./../../../assets/icons/icon_1.svg";
import icon_2 from "./../../../assets/icons/icon_2.svg";
import icon_3 from "./../../../assets/icons/icon_3.svg";
import icon_4 from "./../../../assets/icons/icon_4.svg";
import icon_5 from "./../../../assets/icons/icon_5.svg";
import icon_6 from "./../../../assets/icons/icon_6.svg";

const Section_2 = () => {
  return (
    <div className="container mx-auto px-4">
      {/* FRASE */}
      <div className="relative w-full mb-20">
        <img src={polygon_3} alt="poligono 3" className="w-full" />
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center font-oxanium px-4 text-center sm:text-left">
          <h2 className="hidden sm:flex w-1/12 text-6xl lg:text-8xl opacity-25 justify-center items-start mt-10">
            “
          </h2>
          <p className="sm:w-8/12 text-sm sm:text-base lg:text-lg">
            Utilizamos las mejores prácticas de desarrollo, implementamos
            rigurosos controles de calidad y nos esforzamos por ofrecer
            <strong>soluciones digitales que no solo cumplen sino que superan las
            expectativas de nuestros clientes.</strong> 
          </p>
          <h2 className="hidden sm:flex w-1/12 text-6xl lg:text-8xl opacity-20 justify-center items-end">
            “
          </h2>
        </div>
      </div>

      {/* SERVICIOS */}
      <div id="services" className="relative w-full py-10">
        <img
          className="absolute right-0 -top-24 w-40 sm:w-60 lg:w-auto"
          src={polygon_4}
          alt="poligono 4"
        />
        <h2 className="text-center lg:top-32 text-2xl sm:text-3xl lg:text-[40px] mb-10 lg:mb-0">
          Servicios Destacados
        </h2>
        <div className="lg:absolute lg:right-28 lg:top-28 text-sm sm:text-base font-oxanium text-center lg:text-right mb-6 lg:mb-0">
          <p className="opacity-30">(01)</p>
          <p>Servicios</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 font-oxanium mt-10">
          <Cards_services
            className_1="h-auto bg-[#e0d9d902] flex flex-col justify-center items-center p-8"
            className_2="h-auto bg-[#e0d9d902] rounded-3xl relative flex flex-col items-center gap-8 p-8"
            icon_1={icon_1}
            icon_2={icon_4}
            title_1="Diseño Creativo:"
            title_2="Integración de Tecnologías Emergentes:"
            content_1="Transformamos ideas en experiencias visuales cautivadoras. Conceptualizando y diseñando interfaces atractivas y funcionales."
            content_2="Mantente a la vanguardia con nuestras soluciones que integran las últimas tecnologías emergentes."
          />
          <Cards_services
            className_1="h-auto bg-[#e0d9d902] flex flex-col justify-center items-center p-8"
            className_2="h-auto bg-[#e0d9d902] rounded-3xl relative flex flex-col items-center gap-8 p-8"
            icon_1={icon_2}
            icon_2={icon_5}
            title_1="Desarrollo de Software:"
            title_2="Optimización del SEO:"
            content_1="Desde aplicaciones web hasta soluciones empresariales, nuestra experiencia en desarrollo de software abarca todas las etapas."
            content_2="Mejora tu visibilidad online con estrategias SEO efectivas y personalizadas."
          />
          <Cards_services
            className_1="h-auto bg-[#e0d9d902] flex flex-col justify-center items-center p-8"
            className_2="h-auto bg-[#e0d9d902] rounded-3xl relative flex flex-col items-center gap-8 p-8"
            icon_1={icon_3}
            icon_2={icon_6}
            title_1="Cotización y Consultoría:"
            title_2="Mantenimiento y Soporte:"
            content_1="Analizamos tus necesidades, presupuesto y objetivos para proporcionar soluciones personalizadas."
            content_2="Nuestro compromiso no termina con la implementación. Garantizamos el rendimiento óptimo y resolvemos cualquier desafío que pueda surgir."
          />
        </div>
      </div>
    </div>
  );
};

export default Section_2;
