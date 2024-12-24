import { useState } from 'react'

function App() {
  const [changeColor, setColor] = useState("Black")

  
  return (
    <>
    <div className='w-full h-screen duration-200 flex items-end  justify-center  p-10' style={{backgroundColor: changeColor}}>
{/* // onclick want that we pass a funtion to and if we directly pass setColor("red"). it will be a reference to it 
// thats why we use a callback for it */}
      <div className='bg-white flex align-baseline bottom-10 rounded-md border-2 border-black' > 
        <button onClick={() => setColor("Red")} className='h-4.5 w-15 m-2  bg-red-600'  >Red</button>
        <button onClick={() => setColor("Yellow")} className='h-4.5 w-full p-1 m-2 bg-yellow-400'>Yellow</button>
        <button onClick={() => setColor("Green")} className='h-4.5 w-15  p-1 m-2 bg-green-600'>Green</button>
        <button onClick={() => setColor("Blue")} className='h-4.5 w-15  p-1 m-2 bg-blue-600'> Blue</button>
        <button onClick={() => setColor("Olive")} className='h-4.5 w-15 p-1 m-2 bg-yellow-600' >Olive</button>
        <button onClick={() => setColor("Gray")} className='h-4.5 w-15 p-1 m-2 bg-gray-600'>Gray</button>
        <button onClick={() => setColor("Pink")} className='h-4.5 w-15 p-1 m-2 bg-pink-600'>Pink</button>
        <button onClick={() => setColor("Purple")} className='h-4.5 w-15 p-1 m-2 bg-purple-600'>Purple</button>
        <button onClick={() => setColor("Lavender")} className='h-4.5 w-15 p-1 m-2 bg-[rgb(220,208,255)]'>Lavender</button>
        <button onClick={() => setColor("White")} className='h-4.5 w-15 p-1 m-2 bg-white text-black'>White</button>
        <button onClick={() => setColor("Black")} className='h-4.5 w-15 p-1 m-2 bg-black text-white'>Black</button>
      </div>
    </div>
    </>
  )
}

export default App
