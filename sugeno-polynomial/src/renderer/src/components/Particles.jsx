import React, { useEffect } from 'react'


const Particles = () => {
  
    useEffect(() => {
        particlesJS.load('particles', '/src/assets/particles.json', function() {
            console.log('callback - particles.js config loaded');
          });
    }, [])
  
    return (
    <div id="particles" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.25}}></div>
  )
}

export default Particles