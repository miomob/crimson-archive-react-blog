
import { useState } from 'react'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="blog-post contact-page">
      <h2>Contact</h2>
      <p>Have something to say? Feel free to leave a message.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>

      {submitted && (
        <p role="status">
          Form submitted! This is a demo, so no message was actually sent.
        </p>
      )}
    </section>
  )
}

export default ContactPage
