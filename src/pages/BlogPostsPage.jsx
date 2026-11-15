
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

function BlogPostsPage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch posts')
        return response.json()
      })
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error))
  }, [])

  return (
    <section>
      {posts.map(post => (
        <article className="blog-post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body.slice(0, 150)}...</p>

          <Link to={`/post/${post.id}`} className="read-more">
            Read Full Post →
          </Link>
        </article>
      ))}
    </section>
  )
}

export default BlogPostsPage
