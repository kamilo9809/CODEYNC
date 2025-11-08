import ButtonActive from "../ButtonActive";
import Contact from "../Contact";
import Form from "../Form";
import polygon_6 from "./../../../assets/designs/poligono_6.svg";
import { useState } from "react";
import data from "./../../../utilities/json/form";

type FormDataType = {
  dato: string;
  value: string;
};

const Section_4 = () => {
  const initialFormData: FormDataType[] = data.map((item) => ({
    dato: item.dato,
    value: "",
  }));

  const [formData, setFormData] = useState<FormDataType[]>(initialFormData);

  const resetForm = () => {
    setFormData(initialFormData);
    alert("Datos enviados con exito");
  };

  return (
    <div id="contacto" className="w-full relative px-4 sm:px-6 lg:px-0">
      {/* Polígono decorativo */}
      <div className="absolute -top-[250px] sm:-top-[350px] md:-top-[550px] right-0 pointer-events-none">
        <img src={polygon_6} alt="" />
      </div>

      {/* Contenedor principal */}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-10/12 lg:w-8/12 flex flex-col md:flex-row gap-12 md:gap-0">
          {/* Formulario */}
          <div className="square w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              Construyamos algo <strong>grande juntos.</strong>
            </h2>
            <div>
              <Form
                formData={formData}
                initialFormData={initialFormData}
                setFormData={setFormData}
                className="flex flex-col gap-6 sm:gap-8 pt-10 sm:pt-16"
              />
            </div>
          </div>

          {/* Contacto */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-center font-oxanium">
            <h3 className="text-xl sm:text-2xl pt-6 md:pt-10">
              <strong>Información de Contácto</strong>
            </h3>
            <div className="w-full">
              <Contact className="w-full flex flex-col gap-4 sm:gap-5 pt-10 sm:pt-16 lg:ps-44" />
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="w-full flex justify-center mt-16 sm:mt-20">
        <div className="w-full md:w-10/12 lg:w-8/12">
          <h2 className="text-2xl sm:text-3xl square">¿Qué deseas hacer?</h2>

          {/* Botones */}
          <div className="font-oxanium mt-10 sm:mt-16">
            <ButtonActive className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0" />
          </div>

          {/* Texto informativo */}
          <div className="mt-12 sm:mt-20">
            <p className="text-white opacity-50 text-base sm:text-lg md:text-xl">
              | Cuéntanos sobre tu proyecto o necesidad específica. Proporciona
              detalles como los objetivos que buscas alcanzar, funcionalidades
              clave requeridas y cualquier otro detalle relevante que nos
              permita entender mejor tu visión.
            </p>
          </div>

          {/* Input */}
          <div className="mt-12 sm:mt-20">
            <input
              className="bg-transparent border-b-2 w-full border-[#E0D9D9CC] p-2 text-sm sm:text-base focus:outline-none focus:ring-0"
              type="text"
              name="text"
              id="text"
            />
          </div>

          {/* Botón enviar */}
          <button
            className="text-sm sm:text-base w-full sm:w-5/12 md:w-3/12 font-Audiowide mt-12 sm:mt-20 border-l-2 border-b-2 border-r-1 z-10 border-[#E0D9D9] py-3 rounded-l-xl rounded-r-xl"
            onClick={resetForm}
          >
            <p className="text-center w-full">ENVIAR</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section_4;
