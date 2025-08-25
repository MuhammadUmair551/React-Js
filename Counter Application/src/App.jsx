import React, { useState } from 'react'
import { use } from 'react'
import('./index.css')

function App() {

  let [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (

    <div className='container'>
      <h1 className='heading'>Counter Application</h1>
      <hr />
      <div className='counter'>
        <button onClick={add} className='btn'>+</button>
        <h1>{count}</h1>
        <button onClick={minus} disabled={count == 0} className='btn'>-</button>
      </div>

    </div>
  )
}

export default App
