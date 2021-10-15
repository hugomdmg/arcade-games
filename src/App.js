import './App.css';
import Pong from './pong';
import Asteroids from './asteroids';
import {useState} from "react";

function App() {
  let [control, setControl] = useState("inicio");
  if(control == "inicio"){
    return(
      <>
      <button onClick={()=>{setControl("bolas")}}>Pong</button>
      <button onClick={()=>{setControl("asteroids")}}>Asteroids</button>
      </>
    )
  }else if(control == "bolas"){
    return (
      <>
      <button onClick={()=>{setControl("inicio")}}>volver</button>
      <Pong/>
      </>
    )
  }else if(control == "asteroids"){
    return (
      <>
      <button onClick={()=>{setControl("inicio")}}>volver</button>
      <Asteroids/>
      </>
    )
  }else{
    return(
      <>
      </>
    )
  } 
}

export default App;
