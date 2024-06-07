"use client"
import React from 'react'

type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

type props = {
    post: Post
}

export default function PostCard({post} : Readonly<props>) {

    function showMessage() {
        alert(`This is a test, you clicked the post ${post.id}`);
    }

    return (
        <div>
            <h2>{post.id} - {post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => showMessage()} className='bg-green-400 w-50 text-white py-2 px-4'>
                Click me!
            </button>
        </div>
    )
}
