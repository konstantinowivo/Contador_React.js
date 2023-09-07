const handleChange = (e) =>{
    console.log(e.target.value)
}

export function ButtonOnEvent(){
    return <div style={{border: 'red 5px solid', padding: '10px'}}>
    <button onClick={handleChange}>Holis</button>
    <input onChange={handleChange}></input>
    </div>
}
