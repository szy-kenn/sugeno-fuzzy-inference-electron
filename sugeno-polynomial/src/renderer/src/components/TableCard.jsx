import React from 'react'
import "../assets/TableCard.css"

const TableCard = ({first, second}) => {
  return (
    <div className="table-card">
        <p className="table-card-first">{first}</p>
        <p className="table-card-second">{second}</p>
    </div>
  )
}

export default TableCard