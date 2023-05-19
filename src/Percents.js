import "./Percents.css";
import { useState } from "react";
const Percents = (props) => {
  return (
    <div>
      <button
        className={props.count === "Custom" ? "percentText" : "percentTextNum"}
        value={props.value}
      >
        {props.count === "Custom" ? (
          <input
            className="customInput"
            type="number"
            min="0"
            max="100"
            placeholder="Custom"
          />
        ) : (
          props.count
        )}
      </button>
    </div>
  );
};
export default Percents;
