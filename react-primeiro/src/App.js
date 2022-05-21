import React,{useState} from "react";

import Led from "./componentes/Led";

export default function App(){

    const[ligado,setLigado]=useState(false)

    const bloquear=(obj)=>{
        return obj.preventDefault()
        
    }
    
    
    return(
    /*const [ligado,setLigado]=useState(false)
    return(
        <>
            <img style={{width:'500px'}} src={ligado?Verde:Vermelho}></img>
            <button onClick={()=>setLigado(!ligado)}>{ligado?"ligar":"desligar"}</button>
        </>
    )*/
    <>
        <Led ligado={ligado} setLigado={setLigado}/>
        <a href="https://www.google.com"
         target="_blank"
         onClick={(event)=>bloquear(event)}> clique aqui</a>
    </>
    )
}