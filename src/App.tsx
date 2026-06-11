import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Presupuesto } from "./pages/Presupuesto";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
