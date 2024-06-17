import React from 'react'
import "../assets/Table.css"
import TableCard from './TableCard'

const Table = ({appliedRules}) => {
  return (
    <div className="rules-container">
        <TableCard first={"Rules"} second={"Value"} />
        <TableCard first={"If x = -5 then z = -135"} second={parseFloat(appliedRules[0]).toFixed(2)} />
        <TableCard first={"If x = -4 then z = -72"} second={parseFloat(appliedRules[1]).toFixed(2)} />
        <TableCard first={"If x = -3 then z = -33"} second={parseFloat(appliedRules[2]).toFixed(2)} />
        <TableCard first={"If x = -2 then z = -12"} second={parseFloat(appliedRules[3]).toFixed(2)} />
        <TableCard first={"If x = -1 then z = -3"} second={parseFloat(appliedRules[4]).toFixed(2)} />
        <TableCard first={"If x = 0 then z = 0"} second={parseFloat(appliedRules[5]).toFixed(2)} />
        <TableCard first={"If x = 1 then z = 3"} second={parseFloat(appliedRules[6]).toFixed(2)} />
        <TableCard first={"If x = 2 then z = 12"} second={parseFloat(appliedRules[7]).toFixed(2)} />
        <TableCard first={"If x = 3 then z = 33"} second={parseFloat(appliedRules[8]).toFixed(2)} />
        <TableCard first={"If x = 4 then z = 72"} second={parseFloat(appliedRules[9]).toFixed(2)} />
        <TableCard first={"If x = 5 then z = 135"} second={parseFloat(appliedRules[10]).toFixed(2)} />
    </div>
  )
}

export default Table