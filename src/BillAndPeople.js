import "./BillAndPeople.css";
const BillAndPeople = (props) => {
  return (
    <div>
      <h5 className="billAndPeopleNames">{props.name}</h5>
      <div className="billAndPeople">
        <img src={props.image} alt={props.imageAlt} />
        <input
          className="inputFields"
          type="number"
          placeholder="0"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
export default BillAndPeople;
