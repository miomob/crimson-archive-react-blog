
import { useState } from 'react'

function CommentForm({ onAddComment }) {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (!name.trim() || !comment.trim()) return

    setSubmitting(true)
    setError('')

    try {
      await onAddComment({
        name: name.trim(),
        text: comment.trim()
      })

      setName('')
      setComment('')
    } catch (error) {
      console.error('Error posting comment:', error)
      setError('Could not post your comment. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <label htmlFor="comment-name">Name</label>
      <input
        id="comment-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
        required
      />

      <label htmlFor="comment-text">Comment</label>
      <textarea
        id="comment-text"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        placeholder="Write a comment..."
        required
      />

      {error && <p role="alert">{error}</p>}

      <button type="submit" disabled={submitting}>
        {submitting ? 'Posting...' : 'Submit Comment'}
      </button>
    </form>
  )
}

export default CommentForm
