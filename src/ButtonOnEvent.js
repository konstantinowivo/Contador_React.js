// EVENT HANDLERS o manejadores de eventos

// Esto significa que son objetos que manipulan acciones en base
// a eventos realizados en el sitio. Un evento puede ser un click del mouse,
// escribir en un input, pasar el cursor por arriba de una sección del sitio, etc.


// Ahora lo que podemos hacer es crear una constante manejadora de enventos, que dentro
// contenga la lógica (mediante una arrow function), del manejo de los eventos y pasarla cómo parámetro de los mismos.

const handleChange = (e) =>{
    console.log(e.target.value)
}

export function ButtonOnEvent(){
    return <div style={{border: 'red 5px solid', padding: '10px'}}>
    <button onClick={handleChange}>Holis</button>
    <input onChange={handleChange}></input>
    </div>
}

// Utilizando el evento "onChange":
// vamos a definir el "evento = e" como parámetro dentro de nuestra función flecha,
// para poder acceder y manipular a las propiedades del mismo ej:
// console.log(e.target.value) --> nos va a mostrar el valor de lo que se escriba dentro del input.
