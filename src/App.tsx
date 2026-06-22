import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Presupuesto } from "./pages/Presupuesto";
import { Canvas } from "./pages/Canvas";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
          <Route path="/canvas" element={<Canvas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
