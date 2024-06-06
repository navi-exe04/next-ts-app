// REACT SERVER COMPONENT RSC
import PostsList from "@/components/posts/PostsList";

// Esto se ejecuta desde el servidor
type Post = {
    userId: number, 
    id: number,
    title: string,
    body: string
}

async function GetPosts() : Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts : Post[] = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return posts;
}

//Esto se rederiza de lado del cliente
export default async function page() {

    const posts : Post[] = await GetPosts()

    return (
        <section>
            <h2>POSTS</h2>
            <PostsList posts={posts}></PostsList>
        </section>
    )
}
