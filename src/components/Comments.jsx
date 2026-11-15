
import { useEffect, useState } from 'react'
import CommentForm from './CommentForm'

function Comments({ postId }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setComments([])
    setLoading(true)

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch comments')
        return response.json()
      })
      .then(data => setComments(data))
      .catch(error => console.error('Error fetching comments:', error))
      .finally(() => setLoading(false))
  }, [postId])

  async function addComment(newComment) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: newComment.name,
          body: newComment.text,
          postId: Number(postId)
        })
      }
    )

    if (!response.ok) {
      throw new Error('Failed to post comment')
    }

    const savedComment = await response.json()

    setComments(previousComments => [
      ...previousComments,
      {
        ...savedComment,
        id: `new-${Date.now()}`,
        name: newComment.name,
        body: newComment.text
      }
    ])
  }

  return (
    <section className="comments">
      <h3>Comments</h3>

      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <strong>{comment.name}:</strong> {comment.body}
            </li>
          ))}
        </ul>
      )}

      <h4>Leave a Comment</h4>
      <CommentForm onAddComment={addComment} />
    </section>
  )
}

export default Comments
