import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Preetham } from "./components/preetham";
import { Aditya } from "./components/aditya";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/preetham" element={<Preetham />} />
        <Route path="/aditya" element={<Aditya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
