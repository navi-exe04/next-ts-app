"use client"
// useRouter permite manejar de mejor manera las rutas de nuestra aplicación
// La mas utilizada seria .push ya que funciona como un Link pero con la capacidad
// de realizar logica antes de redireccionar
import { useRouter } from 'next/navigation'
import React from 'react'

// Podemos definir un metadata especifico para cada vista
// No podemos utilizar un metadata dentro de un componente de cliente
// export const metadata = {
//     title: "ABOUT - My NEXT app"
// }

export default function AboutView() {

    const router = useRouter();

    function goToHome() {
        alert('This will execute before to redirect.')
        router.push('/');
        // Hay otras funciones de router que nos pueden servir
        // router.back(); // Regresa a la ruta anterior
        // router.refresh(); // Recarga la ruta
        // router.prefetch('/'); // Precarga la ruta antes que el usuario pueda entrar
    }

    return (
        <section>
            <h1>About!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia 
                nobis natus delectus dolores modi placeat adipisci libero ullam iusto!
            </p>
            <button onClick={() => goToHome()} className='bg-yellow-300 rounded-md w-80 p-4'>
                Back to home
            </button>
        </section>
    )
}
