// Por padrao o next usa SSG
export default async function Blog() {
    // o "{next: { revalidate: 10} }" serve para atualizar a cada 10s
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: { revalidate: 10} });
    const posts = await res.json();

    return (
        <ul className="mt-4">
            {posts.map(post => (
                <div>
                    <li key={post.id}>{post.title}</li>
                    <br />
                </div>
            ))}
        </ul>
    )
}