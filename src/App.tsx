import { useState } from 'react'

import Input from './Component/Input'
 import style from './App.module.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      
        <Input />
     </div>
     
    </>
  )
}

export default App
