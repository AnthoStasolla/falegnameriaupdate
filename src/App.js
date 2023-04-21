import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Homescreen from "./screens/Homescreen";
import Aboutscreen from "./screens/Aboutscreen";
import Galleryscreen from "./screens/Galleryscreen";
import Contattiscreen from "./screens/Contattiscreen";
import Errorscreen from "./screens/Errorscreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/about" element={<Aboutscreen />} />
          <Route path="/gallery" element={<Galleryscreen />} />
          <Route path="/contatti" element={<Contattiscreen />} />
          <Route path="/*" element={<Errorscreen />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
