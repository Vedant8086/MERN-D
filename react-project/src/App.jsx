import { useState } from "react";

function App() {
  // localStorage.setItem('activeCount',0);
  const [activeCount,setActiveCount] = useState(Number(localStorage.getItem('activeCount')));
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
          const newCount =  activeCount + 1;
          setActiveCount(newCount);
          localStorage.setItem('activeCount',newCount)
        }}>Click Me to Add : {activeCount}</button>
        
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>{
        const newCount =  activeCount - 1;
        setActiveCount(newCount);
        localStorage.setItem('activeCount',newCount)
        }}>Click Me to Reduce : {activeCount}</button>
      </div>
    </>
  )
}

export default App
