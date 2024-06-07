/* eslint-disable @next/next/no-async-client-component */
"use client"
// Podemos recibir rutas desde nuestros url usando [] en las carpetas de enrutamiento
import { Suspense } from 'react'
import PostsPage from '../page'
import Loader from '@/components/Loader'
// Otra manera de ingresar a los params de nuestra ruta es con useParams
import { useParams } from 'next/navigation'

// types
// type props = {
//     params: {
//         postId: number
//     }
// }

type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

// functions
async function getPost(postId: number) : Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post : Post = await response.json();
    return post;
}

// export default async function page({params} : props) 
export default async function Post() {

    const params = useParams<{postId: string}>()
    const post = await getPost(Number(params.postId));
    // const post = await getPost(params.postId);

    return (
        <section>
            <div>
                <h2>{post.id} - {post.title}</h2>
                <p>{post.body}</p>
            </div>
            <hr />
            <div>
                <h2>Other posts</h2>
                {/* Suspense permite mostrar un elemento hasta que el contenido 
                de un componente este completamente cargado */}
                <Suspense fallback={
                    <Loader loaderText='Loading posts.'></Loader>
                }>
                    <PostsPage></PostsPage>
                </Suspense>
            </div>
        </section>
    )
}
