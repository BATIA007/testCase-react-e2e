import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar/navbar'
import { Router } from './router/router'

// const App = () => {
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({ name: 'Alex' })
//     }, 500)
//   }, [])

//   return (
//     <div>
//       <h1>Title</h1>
//       <button onClick={() => setToggle(prev => !prev)} >Кнопка</button>
//       {toggle && <p data-testid='tab'>tab</p>}
//       {data && <span data-testid='data'>{data.name}</span>}
//       <input value={value} onChange={(e) => setValue(e.target.value)} placeholder='username' />
//       <p data-testid='value'>{value}</p>
//       <a data-testid="link" className='link' href="#">Ссылка</a>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  )
}

export default App