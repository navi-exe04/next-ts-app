// Los route handlers, nos permite realizar peticiones web (esto esta más enfocado al backend)
// Estos se definen con los metodos GET, POST, PUT, DELETE
// Para usarlos necesitamos usar la biblioteca NextRespose para retornar las respuestas
import { NextResponse } from "next/server";

type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

export async function GET() {
    // Get the posts from backend
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts : Post[] = await response.json();
    return NextResponse.json(posts)
}

export async function POST(request:Request) {

    // Podemos acceder a la información que nos manda el cliente desde un body
    const postInfo : Post = await request.json();
    console.log(postInfo);

    return NextResponse.json({
        'message': 'Agregando datos',
        'body': postInfo
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