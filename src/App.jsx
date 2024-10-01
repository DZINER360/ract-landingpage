import { useState } from "react";

function App() {


  return (
   <div className="w-full h-screen flex ">

    <div className="left w-[35%] h-full bg-stone-900 flex items-center justify-between bg-[url('https://images.unsplash.com/photo-1649930536248-df58fd1f54f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D')]">
      <div className="text w-full h-full text-white p-10 absolute top-96 left-36 leading-10 ">
        <h2 className="text-5xl mb-2">MY NAME IS</h2>
        <h1 className=" text-8xl text-thin mb-5 font-extrabold">MAHE$H</h1>
        <button className="py-4 px-5 bg-orange-400 text-2xl">I'M A UI UX DZ!NER & DEVELOPER</button>
      </div>
    </div>

    <div className="right w-[70%] h-full">
    <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598387746216-506f6bd47aad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D" alt="" />

    </div>
   </div>
  );
}
export default App;

// ek se jyad ahai to
// export const b
// export const b
