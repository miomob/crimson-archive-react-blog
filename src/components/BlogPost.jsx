import Comments from './Comments'
function BlogPost({ title, content, author, date }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Date:</strong> {date}</p>
      <Comments />
    </article>
  )
}

export default BlogPost
