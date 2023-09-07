export function UserCard({ name, amount, married, points, address }) {
    console.log(name, amount, married, points, address)
    return <div style={{border: 'red 5px solid', padding: '10px'}}>
            <h1>{name}</h1>
            <p>{amount}</p>
            <p>{married ? "married" : "single"}</p>
            <ul>
                <li>city: {address.street}</li>
                <li>city: {address.city}</li>
            </ul>
        </div>
}

