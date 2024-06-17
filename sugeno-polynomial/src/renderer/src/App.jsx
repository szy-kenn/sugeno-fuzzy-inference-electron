import Particles from "./components/Particles";
import Blur from "./components/Blur";
import {useState} from "react";

import "./assets/App.css"
import Modal from "./components/Modal";
const App = () => {

  const [isShown, setIsShown] = useState(false);
  const [userInput, setUserInput] = useState(0);

  const [finalInput, setFinalInput] = useState(0);

  const handleClick = () => {
    setIsShown(!isShown);
    setFinalInput(userInput);
  }
  
  return (
    <div id="app">
      <Modal userInput={finalInput} setIsShown={setIsShown} isShown={isShown} /> 
      <Blur top={-27} left={-92} width={471} height={420} color={"rgba(34, 197, 94, 0.5)"} blur={400}/>
      <Blur top={631} left={1384} width={480} height={464} color={"rgba(89, 58, 177, .5)"} blur={300}/>
      <Blur top={-173} left={1452} width={544} height={550} color={"rgba(59, 130, 246, 0.5)"} blur={400}/>
      <Blur top={317} left={483} width={854} height={413} color={"rgba(20, 184, 166, 0.25)"} blur={600}/>
      <Particles />
      <div className={`main-container ${isShown ? "hidden" : ""}`}>
        <div className="heading-container">
          <h1 className="app-heading">Sugeno Fuzzy<br />Inference System</h1>
          <h3 className="app-subheading">Polynomial Equation Estimation</h3>
        </div>

        <div className="equation-container">
          <p>y = x^3 + 2x</p>
        </div>

        <div className="input-container">
          <p>Enter a number</p>
          <div className="input-box-container">
            <input 
              type="number" 
              name="userInput" 
              id="userInput" 
              min="-5" 
              max="5"
              step="0.1" 
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              required/>
          </div>
          <button 
            className="btn btn-continue"
            onClick={handleClick}
            >Continue
          </button>
        </div>
      </div>
    </div>
  );

}

export default App

