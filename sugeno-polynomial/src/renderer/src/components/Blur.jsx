import React from 'react'

const Blur = ({color, top, left, height, width, blur}) => {
  return (
    <div style={{
        position: 'absolute', 
        top: top, 
        left: left, 
        height: height, 
        width: width, 
        filter: `blur(${blur}px)`, 
        backgroundColor: color}}
        ></div>
  )
}

export default Blur