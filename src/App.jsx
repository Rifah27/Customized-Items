import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CustomizeAll from "./pages/CustomizeAll";
import CustomizerSVG from "./pages/CustomizerSVG";
import CustomizerHoodie from "./pages/CustomizerHoodie";
import PreviewModal from "./components/PreviewModal";
import "./App.css";

function App() {
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  return (
    <Router>
      <header className="app-header">
        <h1 className="logo">🎨 Customizer App</h1>
        <nav className="nav-bar">
          <Link to="/customize">Image Customizer</Link>
          <Link to="/svg/tshirt">SVG Customizer</Link>
          <Link to="/hoodie">Hoodie Customizer</Link>
          <button className="preview-btn" onClick={() => setPreviewOpen(true)}>
            Preview
          </button>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/customize" element={<CustomizeAll />} />
          <Route path="/svg/:productType" element={<CustomizerSVG />} />
          <Route path="/hoodie" element={<CustomizerHoodie />} />
        </Routes>
      </main>

      <PreviewModal isOpen={isPreviewOpen} onClose={() => setPreviewOpen(false)} />
    </Router>
  );
}

export default App;
