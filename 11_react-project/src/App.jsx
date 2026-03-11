import { useState } from "react";

function App() {
  const [activeCount, setActiveCount] = useState(Number(localStorage.getItem('activeCount')));
  return (
    <div className="bg-gray-500 flex flex-col h-screen items-center justify-center gap-6">
      
      <button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Counter : {activeCount}
      </button>
      
      <div className="flex">
        <button className="m-5 bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={()=>{
          const newCount = activeCount + 1;
          setActiveCount(newCount);
          localStorage.setItem('activeCount',newCount)
        }}>
          +
        </button>
        
        <button className="m-5 bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={()=>{
          const newCount = activeCount - 1 > 0 ? activeCount - 1 : 0;
          setActiveCount(newCount);
          localStorage.setItem('activeCount',newCount)
        }}>
          -
        </button>

        <button className="m-5 bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          onClick={()=>{
          const newCount = 0;
          setActiveCount(newCount);
          localStorage.setItem('activeCount',newCount)
        }}>
          Reset
        </button>
      </div>

    </div>
  )
}

export default App;