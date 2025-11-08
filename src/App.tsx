import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routes.tsx";

function App() {
  return (
    <div className="text-[#E0D9D9] bg-[#121213] " >
      <BrowserRouter basename="">
        <RoutesIndex />
      </BrowserRouter>
    </div>
  );
}

export default App;
