import { useState } from "react";
import { useEffect } from "react";

export function Contador(){

    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    useEffect(function(){
        console.log('render')
    }, [contador]) // De esta manera le decimos a la función que sólo se ejecutará cuando se modifique el estado del "contador"

    return (
        <div>
            <input onChange={e =>{
            setMensaje(e.target.value)
            }}/>
            <button onClick={()=>{
                alert("el mensaje es:" + mensaje)
            }}>
            save
            </button>

            <hr/>

            <h1>Contador: {contador}</h1>
            <button onClick={()=>{
                setContador(contador + 1)
            }} >Sumar</button>
            <button onClick={()=>{
                setContador(contador - 1)
            }}>Restar</button>
        </div>
    )
}