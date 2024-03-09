import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/components/Navbar.tsx";
import RoutesIndex from "./routes.tsx";

function App() {
  return (
    <div className="text-[#E0D9D9] bg-[#121213] " >
      <BrowserRouter basename="">
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
