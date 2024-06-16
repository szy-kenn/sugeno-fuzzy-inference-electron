import Particles from "./components/Particles";
import Blur from "./components/Blur";

import "./assets/App.css"
const App = () => {
  
  return (
    <div id="app">
      <Blur top={-27} left={-92} width={471} height={420} color={"rgba(34, 197, 94, 0.05)"} blur={200}/>
      <Blur top={631} left={1384} width={480} height={464} color={"rgba(89, 58, 177, 0.15)"} blur={200}/>
      <Blur top={-173} left={1452} width={544} height={550} color={"rgba(59, 130, 246, 0.1)"} blur={200}/>
      <Blur top={317} left={483} width={854} height={413} color={"rgba(20, 184, 166, 0.1)"} blur={200}/>
      <Particles />
      <div className="main-container">
        <h1 className="app-heading">Sugeno Fuzzy<br />Inference System</h1>
        <h3 className="app-subheading">Polynomial Equation Estimation</h3>

        <div className="equation-container">
          <p>y = x^3 + 2x</p>
        </div>
      </div>
    </div>
  );

}

export default App

