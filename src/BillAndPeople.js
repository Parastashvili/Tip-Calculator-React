import React from "react";
import "./BillAndPeople.css";
const BillAndPeople = (props) => {
  const clearInputs = () => {
    let percentBox = document.querySelectorAll(".percentTextNum");
    for (let index = 0; index < percentBox.length; index++) {
      percentBox[index].classList.remove("percentTextNumA");
      document.querySelectorAll(".sumAmount")[0].innerHTML = "$0.00";
      document.querySelectorAll(".sumAmount")[1].innerHTML = "$0.00";
      document.querySelector(".customInput").value = null;
    }
  };
  return (
    <div>
      <div className="zeroWarning">
        <h5 className="billAndPeopleNames">{props.name}</h5>
        <h6 id={props.idName} className="zeroWarningText">Can’t be zero</h6>
      </div>
      <div className="billAndPeople">
        <img src={props.image} alt={props.imageAlt} />
        <input
          className="inputFields"
          type="number"
          placeholder="0"
          onChange={clearInputs}
        />
      </div>
    </div>
  );
};
export default BillAndPeople;
