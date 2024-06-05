import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    {/* Podemos hacer uso de Link para que la pagina no se vuelva a
                    cargar cuando se de clic en un enlace */}
                    <Link href="/">Index</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/store">Store</Link>
                </li>
            </ul>
        </nav>
    )
}
