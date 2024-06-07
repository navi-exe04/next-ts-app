// Podemos recibir parametros asi creando carpetas para recibir los datos
import { NextResponse } from "next/server";

// Podemos recibir params al igual que los componentes de react
type props = {
    params: {
        postId: number
    }
}

type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

export async function GET(request: Request, {params} : props) {

    // Con serachParams podemos acceder a los parametros que vienen concatenados a nuestras rutas
    const {searchParams} = new URL(request.url);
    console.log(searchParams);
    console.log(searchParams.get("nombre"));


    const response : Response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const post : Post = await response.json();
    return NextResponse.json(post)
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