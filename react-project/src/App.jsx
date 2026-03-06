import { useState } from "react";

function App() {
  const [activeCount,setActiveCount] = useState(0);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setActiveCount(activeCount+1)}>Click Me to Add : {activeCount}</button>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setActiveCount(activeCount-1)}>Click Me to Reduce : {activeCount}</button>
      </div>
    </>
  )
}

export default App
