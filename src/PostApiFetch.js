// Consumiendo una API

// Vamos a realizarlo a través de "fetch" (función que viene incluída en el navegador), que se utiliza
// para realizar solicitudes de recursos web o API.
// Lo que vamos a lograr con ello es obtener datos o interactuar
// con servicios web externos.
// en JS la API Fetch se usa para realizar solicitudes HTTP o HTTPS


// Generalmente en el ámbito laboral, no vamos a contar con los datos por consola,
// sino que vamos a tener que pedirlos a un servidor, es decir consumirlos a través de una API

// Vamos a declarar una constante, de la misma manera que creamos un componente,
// generamos una constante y la exportamos.
// Dentro de la misma vamos a alojar una función flecha que nos retornará un botón que una vez que clickeamos,
// a través del evento onClick, hará un pedido de datos.

export const Posts = () =>{
    return <div style={{border: 'red 5px solid', padding: '10px' }}>
    <button onClick={() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
    trer datos
    </button>
    </div>
}