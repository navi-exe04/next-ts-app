import React from 'react'
import Link from 'next/link'

// Podemos crear nuestra pagina de not found personalizada
export default function NotFound() {
    return (
        <div>
            <h2>NOT FOUND: 404</h2>
            <Link href="/">REGRESAR</Link>
        </div>
    )
}
