"use client"
// Podemos recibir rutas desde nuestros url usando [] en las carpetas de enrutamiento
import { Suspense } from 'react'
import PostsPage from '../page'
import Loader from '@/components/Loader'

// types
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

// functions
async function getPost(postId: number) : Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post : Post = await response.json();
    return post;
}

export default async function page({params} : props) {

    const post = await getPost(params.postId);

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
