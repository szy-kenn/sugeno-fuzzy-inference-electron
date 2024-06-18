import {useState, useEffect} from "react";
import Particles from "./components/Particles";
import Modal from "./components/Modal";
import "./assets/App.css"

const App = () => {

  const [isShown, setIsShown] = useState(false);
  const [userInput, setUserInput] = useState(0);
  const [toastContent, setToastContent] = useState("");
  const [finalInput, setFinalInput] = useState(0);

  const handleClick = () => {
    if (userInput > 5 || userInput <= -5) {
      setToastContent("Input must be between -5 and 5");
      return;
    }

    setToastContent("");
    setIsShown(!isShown);
    setFinalInput(userInput);
  }

  useEffect(() => {

    if (userInput > 5 || userInput <= -5) {
      setToastContent("Input must be between -5 and 5");
    } else {
      setToastContent("");
    }
    
  }, [userInput])
  
  
  return (
    <div id="app">
      <Modal 
        userInput={finalInput} 
        setIsShown={setIsShown} 
        isShown={isShown}
      /> 
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
          <div className={`toast-container ${toastContent.length === 0 ? "hidden" : ""}`}>
            <span className="toast-span">{toastContent}</span>
          </div>
          <div className={`input-box-container ${toastContent.length > 0 ? "invalid" : ""}`}>
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
            disabled={toastContent.length > 0 ? true : false}
            >Continue
          </button>
        </div>
      </div>
    </div>
  );

}

export default App

