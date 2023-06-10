import "./App.css";
import PotatoDoc from "./page/potatoDoc/index.jsx";
import Information from "./page/info/index.jsx";
import Disease from "./page/disease/index.jsx";
import Pest from "./page/pest/index.jsx";
import Maintenance from "./page/maintenance/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/PotatoDoc-Reactjs" element={<PotatoDoc />} />
        <Route path="/PotatoDoc-Reactjs/info" element={<Information />} />
        <Route path="/PotatoDoc-Reactjs/disease" element={<Disease />} />
        <Route path="/PotatoDoc-Reactjs/pest" element={<Maintenance />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
