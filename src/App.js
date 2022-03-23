// Imports
import Header from "./components/Header";
import Footer from "./components/Footer";
// Images
import ModifyIcon from "./assets/Modify.svg";
import CheckIcon from "./assets/Check.svg";
import UncheckIcon from "./assets/Uncheck.svg";
import ChangeIcon from "./assets/Change.svg";
import DeleteIcon from "./assets/Delete.svg";

function App() {
  return (
    <>
      <Header>
        <a href="#">CONTACT</a>
      </Header>
      <div className="title">
        <h1 class="">Things todo today</h1>
        <img src={ModifyIcon} alt="modify icon" />
      </div>
      <div className="content ">
        <div className="element">
          <img src={CheckIcon} alt="check icon" />
          <p>Start learning Vue.js</p>
          <div className="icons">
            <img src={ChangeIcon} alt="change icon" />
            <img src={DeleteIcon} alt="delete icon" />
          </div>
        </div>
        <div className="element">
          <img src={UncheckIcon} alt="check icon" />
          <p>Start learning Vue.js</p>
          <div className="icons">
            <img src={ChangeIcon} alt="change icon" />
            <img src={DeleteIcon} alt="delete icon" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
