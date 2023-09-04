import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserCard } from './Greeting';
// import { ButtonOnEvent} from '.ButtonOnEvent'
import { Button } from './Button'
import { TaskCard } from './Task'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<>
  <UserCard
  name= "ivo Konstantinow"
  amount={3000}
  married={true}
  points={[200, 300, 322]}
  address={{
    street: "guemes 300",
    city: "rosario",
  }}/>

  <Button text='click me!' name='ivo'/>
  <Button text='pay'/>
  <Button text={3}/> 

  <TaskCard ready={false}/>
</>
);

