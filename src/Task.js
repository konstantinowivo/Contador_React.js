import './task.css'

export function TaskCard({ ready }){
    return <div className='card'>
        <h1> mi primer tarea </h1>
        <span className={ready ? 'bg-green' : 'bg-red'}>
            {ready ? 'Tarea realizado' : 'Tarea pendiente'}
        </span>
    </div>
}
