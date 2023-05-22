import "./reset.css";
import "./App.css";
import Percent from "./Percents";
import Summer from "./Sum";
import logo from "./images/logo.svg";
import dollarLogo from "./images/icon-dollar.svg";
import personLogo from "./images/icon-person.svg";
import BillAndPeople from "./BillAndPeople";
const percents = [5, 10, 15, 25, 50];
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
            <Percent percents={percents} />
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
