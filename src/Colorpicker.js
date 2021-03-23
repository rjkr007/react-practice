import React, { useState } from "react";
import "./Colorpicker.css";

const colorNames = [
  "Thistle",
  "BlueViolet",
  "MistyRose",
  "Chartreuse",
  "PapayaWhip",
  "Aquamarine",
  "SpringGreen",
  "SaddleBrown",
  "CornflowerBlue",
];

function Colorpicker() {
  const [color, setColor] = useState("Tomato");

  const divStyle = { backgroundColor: color };

  return (
    <div>
      <h1 className="color">4.Colorpicker</h1>

      <div className="dropdown" style={divStyle}>
        <p>
          <b>Selected color: {color}</b>
        </p>
      </div>
      <ul>
        {colorNames.map((colorName) => (
          <div className="cats">
            {" "}
            <li>
            <button
              className="cat"
              onClick={() => setColor(colorName)}
              key={colorName}
            
              >{colorName}
            </button></li>{" "}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Colorpicker;
