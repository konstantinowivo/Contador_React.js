// PROP-TYPES

// Es una manera de "restringir" el uso de diferentes
// tipos de datos que no sean los esperados cómo parámetros
// de props, o bien podemos definir props por default también..

// 1) instalamos la dependencia: "npm i prop-types"
// 2) importamos la libreria al componente: import PropTypes from 'prop-types'
// 3) agregamos un método a nuestro objeto definiendolo;
// 4) Agregamos '.isRequired' al tipo de dato para definir que el mismo es obligatorio

    // Button.proTypes = {
    //     text : PropTypes.string.isRquired
    // }

// Opcionalmente podemos definir un condicional dentro de la función del componente, especificando
// que si el tipo de dato no es un string, nos retorne un mensaje por consola para que lo modifiquemos

// export function Button({text, name = 'usuario'}){
//  console.log(text)
//      if(!text){
//       console.log('el texto es requerido..')  
// }
//     return <button>

//     </button>
// }

// En el caso de querer añadir una prop por defecto, en este caso name:

// Button.defaultProps = {
//     name: 'some User'
// }


import PropTypes from 'prop-types'

export function Button({text, name}){
    console.log(text, name)
    return <div style={{border: 'red 5px solid', padding: '10px'}}>
    <button>
        {text} - {name}
    </button>
    </div>
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'some User'
}