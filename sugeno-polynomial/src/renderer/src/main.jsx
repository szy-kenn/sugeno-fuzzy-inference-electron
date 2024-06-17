import './assets/main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Blur from './components/Blur'
import Particles from './components/Particles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Blur top={-27} left={-92} width={471} height={420} color={"rgba(34, 197, 94, 0.5)"} blur={400}/>
      <Blur top={631} left={1384} width={480} height={464} color={"rgba(89, 58, 177, .5)"} blur={300}/>
      <Blur top={-173} left={1452} width={544} height={550} color={"rgba(59, 130, 246, 0.5)"} blur={400}/>
      <Blur top={317} left={483} width={854} height={413} color={"rgba(20, 184, 166, 0.25)"} blur={600}/>
    <App />
  </React.StrictMode>
)
