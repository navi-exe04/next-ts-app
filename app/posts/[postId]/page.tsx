// Podemos recibir rutas desde nuestros url usando [] en las carpetas de enrutamiento
import React from 'react'

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
        <div>
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}
