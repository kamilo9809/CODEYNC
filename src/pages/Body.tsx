import Section_1 from "./components/screens/Section_1";
import Section_2 from "./components/screens/Section_2";
import Section_3 from "./components/screens/Section_3";
import Section_4 from "./components/screens/Section_4";
import Section_5 from "./components/screens/Section_5";
import polygon_2 from "../assets/designs/poligono_2.svg";
import Navbar from "./components/Navbar";
import polygon_7 from "../assets/designs/poligono_7.svg";

const Body = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="absolute left-0 -top-56 pointer-events-none">
        <img src={polygon_2} alt="poligono 2" />
      </div>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <div className="absolute left-0 top-[550vh] pointer-events-none ">
        <img src={polygon_7} alt="" />
      </div>
      <Section_5 />
    </div>
  );
};

export default Body;
