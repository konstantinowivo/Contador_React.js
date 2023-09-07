export function OnSubmitPreventDefault (){
    return <div style={{border: 'red 5px solid', padding: '10px'}}>
        <form onSubmit={(e) => {
            e.preventDefault()
            console.log('enviado')
        }}>
            <h1>Enviar formulario</h1>
            <button>enviar</button>
        </form>
    </div>
}