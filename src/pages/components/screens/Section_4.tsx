import ButtonActive from "../ButtonActive";
import Contact from "../Contact";
import Form from "../Form";
import polygon_6 from "./../../../assets/designs/poligono_6.svg";
import  { useState } from "react";
import data from "./../../../utilities/json/form";

const Section_4 = () => {
  const initialFormData: FormDataType[] = data.map((item) => ({
    dato: item.dato,
    value: "",
  }));

  const [formData, setFormData] = useState<FormDataType[]>(initialFormData);

  const resetForm = () => {
    setFormData(initialFormData);
    alert('Datos enviados con exito')
  };



  return (
    <div id="contacto" className="w-full relative">
      <div className="absolute -top-[550px] right-0 pointer-events-none">
        <img src={polygon_6} alt="" />
      </div>
      <div className="w-full flex justify-center">
        <div className="w-8/12 flex">
          <div className="square w-1/2">
            <h2 className="text-5xl">
              Construyamos algo <strong>grande juntos.</strong>
            </h2>
            <div>
              <Form
                formData={formData}
                initialFormData={initialFormData}
                setFormData={setFormData}
                className="flex flex-col gap-8 pt-16"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center font-oxanium">
            <h3 className="text-2xl pt-10">
              <strong>Información de Contácto</strong>
            </h3>
            <div>
              <Contact className="w-full flex flex-col gap-5 pt-16" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="w-8/12">
          <h2 className="text-3xl square">¿Qué deseas hacer?</h2>
          <div className="font-oxanium mt-16">
            <ButtonActive className="flex justify-between" />
          </div>
          <div className="mt-20">
            <p className="text-white opacity-50 text-xl">
              | Cuéntanos sobre tu proyecto o necesidad específica. Proporciona
              detalles como los objetivos que buscas alcanzar, funcionalidades
              clave requeridas y cualquier otro detalle relevante que nos
              permita entender mejor tu visión.
            </p>
          </div>
          <div className="mt-20">
            <input
              className="bg-transparent border-b-2 w-full border-[#E0D9D9CC]"
              type="text"
              name="text"
              id="text"
            />
          </div>
          <button
            className="text-base w-3/12 font-Audiowide mt-20 border-l-2 border-b-2 border-r-1 z-10 border-[#E0D9D9]  py-3 rounded-l-xl rounded-r-xl"
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
