import React from 'react'
import "../assets/Modal.css"
import LineChart from './LineChart'
import BarChart from './BarChart'
import Table from './Table'
import { mfs, calculateExact } from '../classes/utils'
import ScatterChart from './ScatterChart'

const Modal = ({userInput, setIsShown, isShown}) => {

  const z = [-135, -72, -33, -12, -3, 0, 3, 12, 33, 72, 135];
  const data = Array.from({length: mfs.length}, (_, idx) => mfs[idx].calculate(userInput));
  
  let cog = 0;
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    cog += (parseFloat(data[i]) * parseFloat(z[i]));
    sum += parseFloat(data[i]);
  }

  cog = cog / sum;
  cog = cog.toFixed(2);

  const exactValue = calculateExact(userInput).toFixed(2);

  const handleClick = () => {
    setIsShown(false);
  };

  return (
    <div className={`modal-container ${!isShown ? "hidden" : ""}`}>

        <div className="modal-heading">
            <p>
                Sugeno Fuzzy Inference System
            </p>
            <button className="btn btn-close" onClick={handleClick}>
                <p>✖</p>
            </button>
        </div>

        <hr />

        <div className="content-container">
            <div className="results-container">
                <div className="user-input-container">
                    <p>Input</p>
                    <span>
                        {userInput}
                    </span>
                </div>
                <div className="estimated-value-container">
                    <p>Estimated Value</p>
                    <span>
                        {cog}
                    </span>
                </div>
                <div className="exact-value-container">
                    <p>Exact Value</p>
                    <span>
                        {exactValue}
                    </span>
                </div>
                <div className="comparison-chart">
                    <ScatterChart estimate={{x: userInput, y: cog}} exact={{x: userInput, y: exactValue}} />
                </div>
            </div>
            <div className="charts-container">
                <div className="line-chart-container chart-container">
                    {isShown && <LineChart userInput={userInput} />}
                </div>
                <div className="bar-chart-container chart-container">
                    {isShown && <BarChart data={data} />}
                </div>
            </div>
            <Table appliedRules={data} />
        </div>

    </div>
  )
}

export default Modal;