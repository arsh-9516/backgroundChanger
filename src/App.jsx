import { useState } from "react"

export default function App(){
  const [color,setColor]= useState("skyblue")
  return(
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-2">

       <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-2xl">
        
        <button onClick={()=>setColor("red")} className="outline-non px4 py-1 rounded-lg shadow-lg text-white" 
        style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>setColor("green")} className="outline-non px4 py-1 rounded-lg shadow-lg text-white" 
        style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>setColor("blue")} className="outline-non px4 py-1 rounded-lg shadow-lg text-white" 
        style={{backgroundColor:"blue"}}>Blue</button>
        
        </div>
      </div>
    </div>
  )
}