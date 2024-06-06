// En caso de que necesitemos procesar información desde el cliente
// Esto quiere decir que si necesitamos hacer cosas como manejar estados
// o realizar cualquier procesamiento desde el navegador, debemos especificar 
// que el componente sera un "use client"
"use client" // Use client puede afectar a los componentes hijos tambien
import { useEffect, useState } from 'react'

// Al usar un use client, no se nos permite definir la configuración de metadata
// ya que el servidor no lo tomara en cuenta

export default function Counter() {

    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        alert('The counter works!!!');
    }, []);

    const handleCounter = () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={handleCounter}>Add +</button>
        </div>
    )
}
