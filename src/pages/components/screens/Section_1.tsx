import ButtonLogin from "../ButtonLogin";
import letras from "./../../../assets/image/letras_de_codeync.svg";
import { motion } from "framer-motion";

const Section_1 = () => {
  return (
    <div>
      <div className="w-full  mt-24">
        <h1 className="text-center text-5xl">Where Ideas Unfold in Code_</h1>
      </div>
      <div className="w-full flex justify-center pt-10">
        <p className="text-center w-3/6">
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
      <div>
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
    </div>
  );
};

export default Section_1;
