import ButtonLogin from "../ButtonLogin";
import letras from "./../../../assets/image/letras_de_codeync.svg";
import letras_2 from "./../../../assets/image/letras_de_plus.svg";
import polygon_2 from './../../../assets/designs/poligono_2.svg'
import handBoard from "./../../../assets/image/handBoard.svg";
import { motion } from "framer-motion";



const Section_1 = () => {
  return (
    <div>
      <div className="w-full  mt-24">
        <h1 className="text-center text-5xl">Where Ideas Unfold in Code_</h1>
      </div>
      <div className="w-full flex justify-center pt-10 relative">
      <div
         className="absolute left-0 -top-56 pointer-events-none"
      >
        <img src={polygon_2} alt="poligono 2" />
      </div>
        <p className="text-center w-3/6 font-oxanium">
          En Codeync, fusionamos la creatividad del diseño con la precisión del
          código para dar vida a experiencias digitales excepcionales. Nuestra
          pasión es superar expectativas,{" "}
          <strong>
            ofreciendo soluciones innovadoras que trascienden lo convencional.
          </strong>
        </p>
      </div>
      <div className="relative w-full flex justify-center mt-20">
        <ButtonLogin
          direction="#contact"
          className="absolute -bottom-12 border-l-2 border-b-2 border-r-1 z-10 border-[#E0D9D9]  py-2 rounded-l-xl rounded-r-xl ps-10 px-12"
          content="START A PROJECT"
        />
      </div>
      <div className="overflow-x-hidden" >
        <motion.div
          initial={{ x: "200vh" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "loop",
            ease: "linear",
          }}
          animate={{ x: -3000 }}
        >
          <div>
            <div
              className="w-[3000px] h-72"
              style={{
                background: `url(${letras})`,
                backgroundRepeat: "repeat-x",
              }}
            ></div>
          </div>
        </motion.div>
      </div>
      <div id="about" className="flex w-full relative z-10">
        <div className="w-full z-20 flex pt-10 px-20 font-oxanium">
          <div className="text-base">
            <p className="text-[#E0D9D9] opacity-35">(01)</p>
            <p>About Us</p>
          </div>
          <div className=" w-full flex justify-center h-[481px]">
            <article className="w-7/12 text-3xl pt-9">
              Lo que nos distingue es nuestra capacidad para integrar diseño y
              código de manera efectiva, creando experiencias digitales que
              cautivan y sorprenden.
            </article>
          </div>
        </div>
        <div className="absolute right-0 z-0">
          <img src={handBoard} alt="" />
        </div>
      </div>
      <div className="z-20 h-36 relative" >
          <img className="absolute w-full" src={letras_2} alt="" />
      </div>
    </div>
  );
};

export default Section_1;
