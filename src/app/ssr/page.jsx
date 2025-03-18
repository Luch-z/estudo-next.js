export default async function Blog() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      cache: "no-store", // Garante que o fetch sempre traga dados novos
    });
    const posts = await res.json();
  
    return (
      <ul className="mt-4">
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }