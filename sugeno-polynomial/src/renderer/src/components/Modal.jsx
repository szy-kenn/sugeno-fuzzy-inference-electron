import React from 'react'
import "../assets/Modal.css"
import LineChart from './LineChart'
import BarChart from './BarChart'
import Table from './Table'
const Modal = ({userInput, setIsShown, isShown}) => {

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
                        {20}
                    </span>
                </div>
                <div className="exact-value-container">
                    <p>Exact Value</p>
                    <span>
                        {30}
                    </span>
                </div>
            </div>
            <div className="charts-container">
                <div className="line-chart-container chart-container">
                    <LineChart userInput={userInput} />
                </div>
                <div className="bar-chart-container chart-container">
                    <BarChart />
                </div>
            </div>
            <Table appliedRules={[0.0, 0.1, 0.9, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]} />
        </div>

    </div>
  )
}

export default Modal;