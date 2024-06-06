import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: "Official Store"
}

// Podemos crear los layouts de cada sección de nuestra aplicación
// El layout solo afectara a las rutas que se encuentren en esa misma carpeta
export default function layout({children} : {children : React.ReactNode}) {
    return (
        <section>
            <h2>Store section</h2>
            <nav>
                <ul>
                    <li>
                        <Link href='/store/categories'>Categories</Link>
                    </li>
                    <li>
                        <Link href='/store/phones'>Phones</Link>
                    </li>
                </ul>
            </nav>
            { children }
        </section>
    )
}
