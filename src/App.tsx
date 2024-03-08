import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/components/Navbar.tsx"
import RoutesIndex from "./routes.tsx";


function App() {

  return (
    <div>
      <BrowserRouter basename="/">
          <Navbar />
          <Routes>
            <Route path="/" element={<RoutesIndex />}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
