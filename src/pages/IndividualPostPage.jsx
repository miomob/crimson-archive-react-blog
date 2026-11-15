
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import Comments from '../components/Comments'

function IndividualPostPage() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [author, setAuthor] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setPost(null)
    setAuthor(null)
    setLoading(true)

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        if (!response.ok) throw new Error('Post not found')
        return response.json()
      })
      .then(data => {
        setPost(data)

        return fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
        )
      })
      .then(response => response.json())
      .then(user => setAuthor(user))
      .catch(error => console.error('Error fetching post:', error))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return <p>Loading post...</p>
  }

  if (!post || !post.id) {
    return (
      <section className="blog-post">
        <h2>Post Not Found</h2>
        <p>Sorry, this post doesn't exist.</p>
        <Link to="/">Back to Home</Link>
      </section>
    )
  }

  return (
    <article className="blog-post">
      <Link to="/" className="read-more">
        ← Back to All Posts
      </Link>

      <h2>{post.title}</h2>
      <p>{post.body}</p>

      {author && (
        <>
          <p><strong>Author:</strong> {author.name}</p>
          <p><strong>Email:</strong> {author.email}</p>
        </>
      )}

      <Comments postId={id} />
    </article>
  )
}

export default IndividualPostPage
