import React from "react";
import "../hojas_de_estilo/Testimonio.css"


function Testimonio(props) {
    return (
        <div className="contenedor_testimonio">
            
            
            <img className="imagen_testimonio" src={require(`../imagenes/persona${props.imagen}.jpg`)} alt="juan" />
            <div className="contenedor_texto_testimonio">
                <p className="nombre_testomonio">  <strong> {props.nombre} </strong> en {props.pais}  </p>
                <p className="cargo_testomonio">"{props.cargo}   en  {props.empresa}"</p> 
                <p className="texto_testomonio">"{props.testimonio}" </p> 

            </div>
        </div>


    );


}



export default Testimonio;