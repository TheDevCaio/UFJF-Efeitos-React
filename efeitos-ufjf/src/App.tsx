import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [estadoContador, setEstadoContador] = useState(0);
  let variavelContador = 0;
  const refContador = useRef(0);
  const [posicao, setPosicao] = useState({x:150, y:150});

  return (
    <>
    <div>
    <button 
    onClick={() => 
    {
    setEstadoContador((count) => count + 1);
    console.log(estadoContador)
    }}
      
      >
      estadoContado {estadoContador}
      </button>
      </div>

      <button
      onClick={() => {
        variavelContador = variavelContador + 1;;
        console.log("variavelContador", variavelContador);
      }}
      >
      variavelContador  {variavelContador }
      </button>
    </>
  )
}

export default App
