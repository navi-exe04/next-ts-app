// REACT CLIENT COMPONENT RCC
"use client"
type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

type props = {
    posts: Post[]
}

export default function PostsList({posts} : Readonly<props>) {

    function showMessage(postId : number) {
        alert(`You clicked the post ${postId}`)
    }

    return (
        <div>
            {
                posts.map(post => (
                    <div key={post.id}>
                        <h3>{post.id} - {post.title}</h3>
                        <p>{post.body}</p>
                        <button onClick={() => showMessage(post.id)}>Click me!</button>
                    </div>
                ))
            }
        </div>
    )
}
