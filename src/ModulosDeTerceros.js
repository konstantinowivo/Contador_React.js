// En este componente vamos a trabajar con COMPONENTES DE TERCEROS

// Muchas veces cuando estemos diseñando nuestro sitio, vamos a encontrar
// que es más sencillo trabajar con modulos que ya fueron diseñados por otros,
// que ponernos a diseñarlos nosotros mismos, por ejemplo apartados de textos,
// diseñados por la gente de Facebook que podemos integrar a nuestro código.

// Vamos a ver cómo lo podemos integrar a nuestro código, utilizando la librería
// React Icons.

// Lo primero que tenemos que hacer es descargar la dependencia de la misma por medio
// de la consola con el comando "npm i react-icons --save"
// A continuación importamos la misma en el componente que deseamos utilizarla ej:
// import { NombreDelIcono } from 'react-icons/vsc'

import { FaAirbnb } from "react-icons/fa6";

export function ModulosDeTerceros() {
    return <div style={{border: 'red 5px solid'}}>
        <h3> we should look for a? <FaAirbnb/> </h3>
        </div>
}
