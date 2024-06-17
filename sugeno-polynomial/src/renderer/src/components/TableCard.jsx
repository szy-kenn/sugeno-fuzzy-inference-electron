import React from 'react'
import "../assets/TableCard.css"

const TableCard = ({first, second}) => {
  return (
    <div 
        className="table-card"
        style={{
            background:`linear-gradient(150deg, rgba(34,197,94, ${parseFloat(second) * 0.5}) 18%, rgba(17,17,17,0.32396708683473385) 78%)`
        }}>
        <p className="table-card-first">{first}</p>
        <p className="table-card-second">{second}</p>
    </div>
  )
}

export default TableCard