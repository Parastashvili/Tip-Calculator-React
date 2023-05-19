import "./reset.css";
import "./App.css";
import logo from "./images/logo.svg";
import dollarLogo from "./images/icon-dollar.svg";
import personLogo from "./images/icon-person.svg";
import BillAndPeople from "./BillAndPeople";
import Percents from "./Percents";
import Summer from "./Sum";

function App() {
  return (
    <div>
      <header className="siteLogo">
        <img src={logo} alt="site-logo" />
      </header>
      <section className="container">
        <BillAndPeople name="Bill" image={dollarLogo} imageAlt="dollar-logo" />
        <div>
          <h5 className="selectTip">Select Tip %</h5>
          <div className="percentContainer">
            <Percents count="5%" value={5} />
            <Percents count="10%" value={10} />
            <Percents count="15%" value={15} />
            <Percents count="25%" value={25} />
            <Percents count="50%" value={50} />
            <Percents count="Custom" value={10} />
          </div>
        </div>
        <BillAndPeople
          name="Number of People"
          image={personLogo}
          imageAlt="person-logo"
        />
        <div className="summaryContainer">
          <div>
            <Summer name="Tip Amount" addition="/ person" />
            <Summer name="Total" addition="/ person" />
          </div>
          <button className="resetBTN">RESET</button>
        </div>
      </section>
    </div>
  );
}
export default App;
