import React from "react";
import { useParams } from "react-router-dom";
import "../styles/CustomizerSVG.css";

function CustomizerSVG() {
  const { productType } = useParams();

  return (
    <div className="customizer-page">
      <h2 className="customizer-title">
        SVG-based Customizer: {productType}
      </h2>
      <div className="canvas-wrapper">
        <p>Canvas area for {productType} goes here (SVG editing)</p>
      </div>
    </div>
  );
}

export default CustomizerSVG;
