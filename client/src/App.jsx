import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Signup from "./pages/signup"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import Signin from "./pages/Signin"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}
