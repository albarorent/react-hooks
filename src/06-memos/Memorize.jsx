import React, { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const Memorize = () => {

   const {counter, increment} = useCounter(1);
   const [show, setShow] = useState(true);

  return (
    <>
        <h1>
            Counter: <Small value={counter}/>
        </h1>

        <button onClick={increment}>+1</button>

        <button onClick={()=>setShow(!show)}>Show/Hide  {JSON.stringify(show)}</button>
    </>
  )
}
