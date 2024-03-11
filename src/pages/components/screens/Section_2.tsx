import Cards_services from "../cards_services";
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
    <div>
      <div className="h-full w-full relative">
        <img src={polygon_3} alt="poligono 3" />
        <div className="absolute w-full h-full left-0 bottom-0 flex items-center font-oxanium">
          <h2 className="w-3/12 h-full flex justify-center mt-20 text-8xl opacity-25">
            “
          </h2>
          <p className="w-6/12 text-base text-center">
            Utilizamos las mejores prácticas de desarrollo, implementamos
            rigurosos controles de calidad y nos esforzamos por ofrecer
            soluciones digitales que no solo cumplen sino que superan las
            expectativas de nuestros clientes.
          </p>
          <h2 className="w-3/12 h-full flex items-end justify-center text-8xl opacity-20">
            “
          </h2>
        </div>
      </div>
      <div
        id="services"
        className="w-full flex justify-center relative h-[1200px]"
      >
        <img className="absolute right-0 -top-48" src={polygon_4} alt="poligono 4" />
        <div className="w-10/12 grid grid-cols-3 gap-10 font-oxanium absolute">
          <Cards_services
            className_1="h-[583px] w-full bg-[#e0d9d902] flex flex-col justify-center items-center pt-60"
            className_2="h-[862px] w-full bg-[#e0d9d902] rounded-3xl relative flex flex-col items-center gap-12"
            icon_1={icon_1}
            icon_2={icon_4}
            title_1="Diseño Creativo:"
            title_2="Integración de Tecnologías Emergentes:"
            content_1="Transformamos ideas en experiencias visuales cautivadoras. Conceptualizando y diseñando interfaces atractivas y funcionales."
            content_2="Mantente a la vanguardia con nuestras soluciones que integran las últimas tecnologías emergentes."
          />
          <Cards_services
            className_1="h-[620px] w-full bg-[#e0d9d902] flex flex-col justify-center items-center pt-64"
            className_2="h-[836px] w-full bg-[#e0d9d902] rounded-3xl relative flex flex-col items-center gap-12"
            icon_1={icon_2}
            icon_2={icon_5}
            title_1="Desarrollo de Software:"
            title_2="Optimización del SEO:"
            content_1="Desde aplicaciones web hasta soluciones empresariales, nuestra experiencia en desarrollo de software abarca todas las etapas."
            content_2="Mantente a la vanguardia con nuestras soluciones que integran las últimas tecnologías emergentes."
          />
          <Cards_services
            className_1="h-[567px] w-full bg-[#e0d9d902] flex flex-col justify-center items-center pt-60"
            className_2="h-[733px] w-full bg-[#e0d9d902] rounded-3xl relative flex flex-col items-center gap-12"
            icon_1={icon_3}
            icon_2={icon_6}
            title_1="Cotización y Consultoría:"
            title_2="Mantenimiento y Soporte:"
            content_1="Analizamos tus necesidades, presupuesto y objetivos  para proporcionar soluciones personalizadas."
            content_2="Nuestro compromiso no termina con la implementación. Garantizando el rendimiento óptimo y abordar cualquier desafío que pueda surgir."
          />
        </div>
        <h2 className="absolute top-32 square text-[40px]">
          Servicios Destacados
        </h2>
        <div className="absolute right-28 top-28 text-base font-oxanium">
          <p className="opacity-30">(01)</p>
          <p>Servicios</p>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
