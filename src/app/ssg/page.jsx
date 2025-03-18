export default function Blog({ posts }) {
    return(
        <ul>
            {posts.map(posts => (
                <li>{posts.title}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}