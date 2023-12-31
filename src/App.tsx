import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Preetham } from "./components/preetham";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello</div>} />
        <Route path="/preetham" element={<Preetham />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
