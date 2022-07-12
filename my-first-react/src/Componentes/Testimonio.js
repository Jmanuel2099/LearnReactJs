import React from "react";
import '../estilos/Testimonios.css'

export function Testimonio (props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' 
            src ={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
            alt ='foto de spiderman'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'> {props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-testimnio'>"{props.testimonio}"</p>

            </div>
        </div>
    )
}
//export default Testimonio;