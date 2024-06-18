import React, { useState, useEffect } from 'react'
import "../assets/Modal.css"
import LineChart from './LineChart'
import BarChart from './BarChart'
import Table from './Table'
import ScatterChart from './ScatterChart'
import { mfs, calculateExact, calculateWeightedAverage, z } from '../classes/utils'

const Modal = ({userInput, setIsShown, isShown}) => {

    const [data, setData] = useState([]);
    const [WA, setWA] = useState(0.0);
    const [exactValue, setExactValue] = useState(0.0);

    useEffect(() => {
        // after clicking 'Continue', 
        // calculate the fuzzified values, the weighted average, and the exact value
        const _tmpData = Array.from({length: mfs.length}, (_, idx) => mfs[idx].calculate(userInput));
        const _WA = calculateWeightedAverage(_tmpData);
        const _exactValue = calculateExact(userInput).toFixed(2);

        setData(_tmpData);
        setWA(_WA);
        setExactValue(_exactValue);

    }, [userInput])

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
                        {WA}
                    </span>
                </div>
                <div className="exact-value-container">
                    <p>Exact Value</p>
                    <span>
                        {exactValue}
                    </span>
                </div>
                <div className="comparison-chart">
                    <ScatterChart estimate={{x: userInput, y: WA}} exact={{x: userInput, y: exactValue}} />
                </div>
            </div>
            <div className="charts-container">
                <div className="line-chart-container chart-container">
                    {isShown && <LineChart userInput={userInput} />}
                </div>
                <div className="bar-chart-container chart-container">
                    {isShown && <BarChart data={data} labels={z} />}
                </div>
            </div>
            <Table appliedRules={data} />
        </div>

    </div>
  )
}

export default Modal;