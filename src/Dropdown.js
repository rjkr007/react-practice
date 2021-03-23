import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.css";

function Dropdown() {
  const data = [
    { value: 1, label: "CornflowerBlue" },
    { value: 2, label: "MistyRose" },
    { value: 3, label: "Thistle" },
    { value: 4, label: "Teal" },
    { value: 5, label: "GreenYellow" },
  ];

  
  const [selectedValue, setSelectedValue] = useState(null);
  const [color, setColor] = useState("");

  const divStyle = { backgroundColor: color };

  const handleChange = (obj) => {
    setSelectedValue(obj.label);
    setColor(obj.label);
  };

  return (
    <div className="drop3" style={divStyle}>
      <h1 className="drop">5.Dropdown, Hello World!</h1>
      <h3 className="drop2">What Color?</h3>
      <br />
      <Select
        value={selectedValue}
        options={data}
        onChange={handleChange}
      />
      <div className="drop1" style={divStyle}>
        <b>Selected Color:</b>
        <pre>
          <b>{JSON.stringify(selectedValue)}</b>
                  </pre>
      </div>
    </div>
  );
}

export default Dropdown;
