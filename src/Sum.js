import "./Sum.css";
const Summer = (props) => {
  return (
    <div className="totalContainer">
      <div className="tipAmount">
        <h5 className="tip">{props.name}</h5>
        <h6 className="person">{props.addition}</h6>
      </div>
      <h1 className="sumAmount">$0.00</h1>
    </div>
  );
};
export default Summer;
