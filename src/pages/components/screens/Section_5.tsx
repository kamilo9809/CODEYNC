import data from "./../../../utilities/json/Navbar.json";
import twitter from "./../../../assets/icons/twitter.svg";
import instagram from "./../../../assets/icons/instagram.svg";
import facebook from "./../../../assets/icons/facebook.svg";
import codeync from "./../../../assets/image/codeync_footer.svg";
import { Link } from "react-router-dom";

const Section_5 = () => {
  return (
    <div className="w-full mt-40 relative lg:px-12 container mx-auto px-4">
      <div className="w-full lg:flex">
        <div className="lg:w-1/2 square flex flex-col">
          <h2 className="text-3xl text-center lg:text-start">Suscríbete a Nosotros.</h2>
          <input
            className="bg-transparent lg:w-8/12 border-b-2 mt-20 border-[#E0D9D9CC] focus:outline-none focus:ring-0"
            type="text"
            name="subs"
            id="subs"
            placeholder="Ingresa tu correo electrónico"
          />
          <div>
            <button className="mt-20 text-base w-3/12 font-Audiowide border-l-2 border-b-2 border-r-1 z-10 border-[#E0D9D9]  py-3 rounded-l-xl rounded-r-xl">
              Sign Up
            </button>
          </div>
          <div className="lg:mt-60 mt-16">
            <h2>© 2024 CODEYNC. Todos los derechos reservados</h2>
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-5 lg:mt-0">
          <div className="w-full flex justify-between">
            <div className="w-1/2 flex lg:justify-center">
              <ul className="space-y-2 font-oxanium">
                {data.map((navOptions, ind) => (
                  <li key={ind}>
                    <a href={navOptions.path}>{navOptions.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/2 flex flex-col  items-center space-y-7">
              <a href="https://twitter.com/codeync">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="https://www.instagram.com/codeync/">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61555962156379">
                <img src={facebook} alt="facebook" />
              </a>
            </div>
          </div>
          <div className="w-full lg:mt-[280px] mt-10 font-oxanium flex flex-col lg:justify-end lg:items-end  text-base pr-32">
            <div className="w-9/12 flex flex-col gap-4">
                <Link to="">Políticas y Privacidad</Link>
                <Link to="">Términos y  Condiciones</Link>
                <Link to="">FAQ</Link>
                </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <img src={codeync} alt="" />
      </div>
    </div>
  );
};

export default Section_5;
