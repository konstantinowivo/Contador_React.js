// EVENT HANDLERS o manejadores de eventos

// Esto significa que son objetos que manipulan acciones en base
// a eventos realizados en el sitio. Un evento puede ser un click del mouse,
// escribir en un input, pasar el cursor por arriba de una sección del sitio, etc.


export function ButtonOnEvent(){
    return <div style={{background: "pink"}}>
    <button onClick={handleChange}>Holis</button>
    </div>
}

// Ahora lo que podemos hacer es crear una constante manejadora de enventos, que dentro
// contenga la lógica (mediante una arrow function), del manejo de los eventos y pasarla cómo parámetro de los mismos.

const handleChange = (e) =>{
    console.log(e.target.value)
}

// Utilizando el evento "onChange":
// vamos a definir el "evento = e" como parámetro dentro de nuestra función flecha,
// para poder acceder y manipular a las propiedades del mismo ej:
// console.log(e.target.value) --> nos va a mostrar el valor de lo que se escriba dentro del input.

export function InputOnEvent(){
    return <div style={{background: "pink"}}>
    <input onChange={handleChange}></input>
    </div>
}

