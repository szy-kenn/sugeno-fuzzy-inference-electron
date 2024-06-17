import React from 'react'
import "../assets/Table.css"
import TableCard from './TableCard'

const Table = ({appliedRules}) => {
  return (
    <div className="rules-container">
        <TableCard first={"Rules"} second={"Value"} />
        <TableCard first={"If x = -5 then z = -135"} second={"0.0"} />
        <TableCard first={"If x = -4 then z = -72"} second={"0.0"} />
        <TableCard first={"If x = -3 then z = -33"} second={"0.0"} />
        <TableCard first={"If x = -2 then z = -12"} second={"0.0"} />
        <TableCard first={"If x = -1 then z = -3"} second={"0.0"} />
        <TableCard first={"If x = 0 then z = 0"} second={"0.0"} />
        <TableCard first={"If x = 1 then z = 3"} second={"0.0"} />
        <TableCard first={"If x = 2 then z = 12"} second={"0.0"} />
        <TableCard first={"If x = 3 then z = 33"} second={"0.0"} />
        <TableCard first={"If x = 4 then z = 72"} second={"0.0"} />
        <TableCard first={"If x = 5 then z = 135"} second={"0.0"} />
    </div>
  )
}

export default Table