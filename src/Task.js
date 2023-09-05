// ESTILOS

// 1) podemos hacerlo inline, agregando dentro de las etiquetas ej: <div style={{background: '#000000', color: '#fff', padding: '20px'}}

// 2) a través de variables dentro de nuesdtra función, para luego pasarlos como props ej:

// export function TaskCard(){
//     const cardStyle = { background: '#202020', color: '#fff', padding: '20px'};
//     const titleStyle = { fontWeight: 'lighter' }

//     return <div style={cardStyle}>
//         <h1 style={titleStyle}> mi primer tarea </h1>
//         <p> tarea realizada </p>
//     </div>
// }

// 3) O podemos también generar un archivo externo, por ejemplo "Task.css", generar
// los estilos en ese archivo aparte, luego importar ese archivo en este componente (import './task.css') y
// asignarselos a los elementos del componente dentro de sus etiquetas mediante una clase, ej: <div className='card'>


// En este caso vamos a utilizar los estilos generados para marcar si una tarea está completa o no.

// 1) Lo primero que vamos a pasarle una prop a nuestra función componente TaskCard(ready), ready será un booleano

// 2) Dentro de la función generamos una etiqueta <span> con la lógica para aplicar nuestros estilos, donde vamos a decir,
// si ready es igual a true, entonces se aplicarán los estilos (esto representa que la tarea se completó), pero si es false,
// los estilos no se van a aplicar:

// export function TaskCard(ready){
//     return <div>
//         <h1> mi primer tarea </h1>
//         <p> tarea realizada </p>
//         <span className>
//          {ready ? "tarea realizada" : "tarea pendiente"}
//         </span>
//     </div>
// }

import './task.css'

export function TaskCard({ ready }){
    return <div className='card'>
        <h1> mi primer tarea </h1>
        <p> tarea realizada </p>
        <span className={ready ? 'bg-green' : 'bg-red'}>
            {ready ? 'Tarea realizado' : 'Tarea pendiente'}
        </span>
    </div>
}
