import { useState } from "react"
import Card from "./components/card";


function App() {
  const colors = [
    { name: "Red", value: "#FF0000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Green", value: "#00FF00" },
    { name: "Purple", value: "#800080" },
];
 const [color,setColor] = useState("green")
  return (
    <>
    <div className=" flex items-center justify-center duration-300 w-full h-screen"
    style={{backgroundColor : color}}
    >
      <div className="flex flex-wrap fixed bottom-16 inset-x-0  p-2  justify-center  rounded-2xl">
        <div className="flex flex-wrap justify-center gap-3 bg-gray-400 p-2 rounded-2xl">
         {colors.map((c) => (
          <button
          key = {c.value}
          className = "text-white rounded-2xl px-4 py-2 cursor-pointer shadow-lg capitalize"
          onClick={() => setColor(c.value)}
          style={{backgroundColor : c.value}}
          >{c.name}</button> 
         ))}
          
        </div>
      </div>
      <Card/>

    </div>
    </>
  )
}

export default App
