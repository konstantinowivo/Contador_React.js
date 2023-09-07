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