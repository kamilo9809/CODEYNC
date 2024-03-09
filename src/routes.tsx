import { Routes,Route } from "react-router-dom"
import Body from "./pages/Body"
import Login from "./pages/Login"

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  )
}

export default RoutesIndex
