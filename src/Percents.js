import "./Percents.css";
import { useState, useEffect } from "react";
function counter(selectedPercent) {
  document.getElementById("bill").style.display = "none";
  document.getElementById("people").style.display = "none";
  document.querySelector(".customInput").value = selectedPercent;
  let sumAmount = "$0.00";
  let totalPerson = "$0.00";
  let bill = document.querySelectorAll(".inputFields")[0].value;
  let persons = document.querySelectorAll(".inputFields")[1].value;
  if (bill > 0 && persons > 0) {
    sumAmount = `$${(((bill / 100) * selectedPercent) / persons).toFixed(2)}`;
    let tipAmount = document.querySelectorAll(".sumAmount")[0];
    let totalAmount = document.querySelectorAll(".sumAmount")[1];
    tipAmount.innerHTML = sumAmount;
    totalPerson = `$${(
      ((bill / 100) * (selectedPercent + 100)) /
      persons
    ).toFixed(2)}`;
    totalAmount.innerHTML = totalPerson;
  }
  if (selectedPercent != null) {
    if (bill < 1 && persons > 0) {
      document.getElementById("bill").style.display = "block";
    } else if (persons < 1 && bill > 0) {
      document.getElementById("people").style.display = "block";
    } else if (persons < 1 && bill < 1) {
      document.getElementById("bill").style.display = "block";
      document.getElementById("people").style.display = "block";
    }
  }
}
function Percent(props) {
  const [selectedPercent, setSelectedPercent] = useState(null);
  const clicker = (percents) => {
    setSelectedPercent(percents);
  };
  useEffect(() => {
    counter(selectedPercent);
  });
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
        onChange={(e) => {
          setSelectedPercent(Number(e.target.value));
        }}
      />
    </div>
  );
}
export default Percent;
