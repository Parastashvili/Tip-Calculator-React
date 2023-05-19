const Percents = (props) => {
  return (
    <div className={props.count === "Custom" ? "percentTextBox":"percentTextNumBox"}>
      <button className={props.count === "Custom" ? "percentText":"percentTextNum"} value={props.value}>
        {props.count}
      </button>
    </div>
  );
};
export default Percents;
