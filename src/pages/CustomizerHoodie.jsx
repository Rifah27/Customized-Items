import React from "react";
import "../styles/CustomizerSVG.css";

function CustomizerHoodie() {
  return (
    <div className="customizer-page">
      <h2 className="customizer-title">Hoodie Customizer</h2>
      <div className="customizer-container">
        <div className="top-tools-bar">
          <p>Toolbar will go here (upload, export, etc.)</p>
        </div>

        <div className="customizer-main">
          <div className="vertical-toolbar">
            <p>Vertical Tools</p>
          </div>

          <div className="canvas-wrapper">
            <p>Hoodie canvas area here (front/back toggle)</p>
          </div>

          <div className="customizer-controls">
            <p>Controls (colors, text, uploads, etc.)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomizerHoodie;
