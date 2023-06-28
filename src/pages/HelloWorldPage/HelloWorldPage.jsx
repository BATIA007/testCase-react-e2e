import React, { useState } from 'react'

export const HelloWorldPage = () => {
  const [val, setVal] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => val === '123' && setToggle(prev => !prev)

  return (
    <div>
      <h1>Hello World Page</h1>
      <button onClick={handleToggle} id="hello-btn">Button</button>
      <input onChange={e => setVal(e.target.value)} value={val} type="text" id='hello-input' />
      {toggle && <p id="hello-text">{val}</p>}
    </div>
  )
}
