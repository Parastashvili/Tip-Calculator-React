import "./Percents.css";
import { useState, useEffect } from "react";

function Percent(props) {
  const [selectedPercent, setSelectedPercent] = useState(null);
  const clicker = (percents) => {
    setSelectedPercent(percents);
  };
  useEffect(() => {
    if (selectedPercent !== "Custom") {
      if (
        selectedPercent == 5 ||
        selectedPercent == 10 ||
        selectedPercent == 15 ||
        selectedPercent == 25 ||
        selectedPercent == 50
      ) {
        document.querySelector(".customInput").value = "";
      } else {
        document.querySelector(".customInput").value = selectedPercent;
      }
    }
  });
  console.log(selectedPercent);
  return (
    <div className="percentContainer">
      {props.percents.map((percents, index) => (
        <button
          className={`${
            percents !== "Custom" ? "percentTextNum" : "percentText"
          } ${
            selectedPercent === percents && selectedPercent !== "Custom"
              ? "percentTextNumA"
              : ""
          }`}
          key={index}
          value={percents}
          onClick={() => {
            clicker(percents);
          }}
        >
          {percents === "Custom" ? `${percents}` : `${percents}%`}
        </button>
      ))}
      <input
        className="customInput"
        type="number"
        min="0"
        max="100"
        placeholder="Custom"
        onChange={(e) => setSelectedPercent(Number(e.target.value))}
      />
    </div>
  );
}
export default Percent;
