import NavbarData from "./../../utilities/json/Navbar.json";
import ButtonLogin from "./ButtonLogin.tsx";
import logo from "./../../assets/icons/logo_codeync.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = NavbarData;
  return (
    <div className="flex w-full h-16">
      <Link className="flex items-center w-3/12 " to="/">
        <img className="ms-6" src={logo} alt="log" />
      </Link>
      <ul className="w-full flex flex-row  h-full items-center justify-center space-x-10">
        {navOptions.map((option) => (
          <li key={option.path}>
            <a href={option.path}>{option.title}</a>
          </li>
        ))}
      </ul>
      <div className="w-3/12 flex justify-end items-center rel z-20">
        <ButtonLogin
          direction="/login"
          className="squarebt  border-l-2 border-b-2 z-10 border-[#E0D9D9] w-4/5 py-2 rounded-l-xl ps-10 flex justify-start" 
          content="Sign In"
        />
        <div className="absolute -top-16 right-0 bg-gradient-to-b from-[#325358] to-[#325358] rounded-full z-32 w-32 h-20 blur-3xl pointer-events-none "></div>
      </div>
    </div>
  );
};

export default Navbar;
