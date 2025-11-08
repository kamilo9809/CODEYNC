import NavbarData from "./../../utilities/json/Navbar.json";
import ButtonLogin from "./ButtonLogin.tsx";
import logo from "./../../assets/icons/logo_codeync.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navOptions = NavbarData;
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex w-full h-16 items-center justify-between px-6 relative">
      {/* Logo */}
      <Link className="flex items-center w-auto" to="/">
        <img className="h-10" src={logo} alt="logo" />
      </Link>

      {/* Opciones Desktop */}
      <ul className="hidden md:flex flex-row h-full items-center justify-center space-x-10 font-oxanium ms-48">
        {navOptions.map((option) => (
          <li key={option.path}>
            {option.path.startsWith("#") ? (
              <button
                onClick={() => {
                  const section = document.querySelector(option.path);
                  section?.scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
              >
                {option.title}
              </button>
            ) : (
              <Link to={option.path} onClick={() => setOpen(false)}>
                {option.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Botón Sign In Desktop */}
      <div className="hidden md:flex w-3/12 justify-end items-center z-20">
        {/* <ButtonLogin
          direction="/login"
          className="squarebt border-l-2 border-b-2 z-10 border-[#E0D9D9] w-4/5 py-2 rounded-xl ps-10 flex justify-start hover:bg-gradient-to-b from-[#C293FF] to-[#755899]"
          content="Sign In"
        /> */}
        <div className="absolute -top-16 right-0 bg-gradient-to-b from-[#325358] to-[#325358] rounded-full z-0 w-32 h-20 blur-3xl pointer-events-none"></div>
      </div>

      {/* Botón Hamburguesa Mobile */}
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="z-30 relative">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable Mobile */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#0D0D0D] flex flex-col items-center space-y-6 py-8 font-oxanium md:hidden z-20">
          {navOptions.map((option) => (
            <ScrollLink
              className="text-lg cursor-pointer"
              key={option.path}
              to={option.path.startsWith("#") ? option.path.slice(1) : option.path}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setOpen(false)}
              >
              {option.title}
            </ScrollLink>
          ))}
          {/* <ButtonLogin
            direction="/login"
            className="border-l-2 border-b-2 border-[#E0D9D9] py-2 px-6 rounded-xl hover:bg-gradient-to-b from-[#C293FF] to-[#755899]"
            content="Sign In"
          /> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
