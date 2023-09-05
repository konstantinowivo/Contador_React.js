// Uso de PROPS

// Supongamos que queremos que cada uno de nuestros componentes tengan
// un dato especial, diferenciandose uno del otro.
// Para eso vamos a utilizar las props, que serían una especie de parámetro de nuestras
// función que devulve JSX (javascript + html).

// 1) en el archivo index.js, vamos a llamar a nuestro componente, UserCard y pasarle
// algunos argumentos por medio de etiquetas. Recordamos que los argumentos que pasemos en index.js,
// serán interpretados en el el componente a modo de parametros de función por medio de objetos ej:
// export function UserCard({name, amount, ponint, addres})

    // root.render(
    // <> 
    // <UserCard

    // name=''
    // amount={3000}
    // married={true}
    // ponints={20}
    // address={{
    //     street: 'Guemes',
    //     city: 'Rosario'
    // }}
    // />
    // </>

// 2) De esta manera nos aseguramos la posibilidad de re utilización de nuestro componente,
// debido a que la lógica del mismo ya está creada, basta solo con cambiar los argumentos que le pasemos,
// por ejemplo name, amount... para crear otros componentes con diferentes parámetros.

// 3) La propiedad "married" es un booleano, por lo que vamos a poder generar una lógica, por medio de un 
// condicional a través de un operador ternario. {married ? "married" : "single"} <-- Esto quiere decir, en caso
// de que la propiedad "married" contenga true nos mostrará "married", caso contrario sea false nos mostrará "single"

// 4) para ingresar a un elemento de un objeto que hayamos pasado como prop, basta con ingresar la propiedad
// {objeto.elemento}.

export function UserCard({ name, amount, married, points, address }) {
    console.log(name, amount, married, points, address)
    return <div style={{background: "yellow"}}>
            <h1>{name}</h1>
            <p>{amount}</p>
            <p>{married ? "married" : "single"}</p>
            <ul>
                <li>city: {address.street}</li>
                <li>city: {address.city}</li>
            </ul>
        </div>
}

