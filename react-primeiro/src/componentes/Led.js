import React from "react";
import Verde from "./img/verde.jpg"
import Vermelho from "./img/vermelho.jpg"

export default function Led(props){
    
    

    return(
        <>
            <img  src={props.ligado?Verde:Vermelho}></img>
            <button onClick={()=>props.setLigado(!props.ligado)}>{props.ligado?"Desligar":"Ligar"}</button>
            
        </>

    )

} 