// Los route handlers, nos permite realizar peticiones web (esto esta más enfocado al backend)
// Estos se definen con los metodos GET, POST, PUT, DELETE
// Para usarlos necesitamos usar la biblioteca NextRespose para retornar las respuestas
import { NextResponse } from "next/server";

// Podemos recibir params al igual que los componentes de react
type props = {
    params: {
        userId
    }
}

type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

export async function GET() {
    // Get the post from backend
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts : Post[] = await response.json();
    return NextResponse.json(posts)
}

export async function POST() {
    return NextResponse.json({
        'message': 'Agregando datos'
    })
}

export async function PUT() {
    return NextResponse.json({
        'message': 'ACTUALIZANDO datos'
    })
}

export async function DELETE() {
    return NextResponse.json({
        'message': 'ELIMINANDO datos'
    })
}