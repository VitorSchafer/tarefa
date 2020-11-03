import React from 'react'
import '../Composto/composto.css'


function Composto(props) {
    return (
        <div className="Comp">
           
            <h1> Ola, seja bem vindo, por favor digite o seu nome:</h1>
            
            <label className="nome"> {props.nome} </label>

            <input type="text" className="box_text"/>

         </div>
         )
}
export default Composto;