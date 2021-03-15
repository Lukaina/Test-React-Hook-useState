import React, {useState} from 'react';

function Contador() {
   const [count, setCount] = useState(0)

   return (
     <div className="Contador">
       <p>Has hecho Click {count} veces</p>
       <button onClick={() => setCount(count + 1)}>
         Hazme click
       </button>
     </div>
   )
}

export default Contador;