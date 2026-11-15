
import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import BlogPostsPage from './pages/BlogPostsPage'
import IndividualPostPage from './pages/IndividualPostPage'
import ContactPage from './pages/ContactPage'
import './App.css'
import { ThemeProvider } from './ThemeContext'

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: "Honestly, I don't really know what to write here yet. I mostly made this blog to try something new and mess around with web design. We'll see how it goes.",
    author: 'Mio',
    date: 'October 17, 2026'
  },
  {
    id: 2,
    title: 'Getting Into Web Design',
    content: "I've been learning more about web development recently, and there's definitely a lot more to it than I expected. I still prefer the design side of things, but it's nice being able to make something actually work.",
    author: 'Mio',
    date: 'October 16, 2026'
  },
  {
    id: 3,
    title: 'Games I Keep Coming Back To',
    content: "I play a lot of games, but some of them just have me coming back no matter how many times I've played. I think the atmosphere and overall design have a lot to do with it. Sometimes I just want to explore and look around.",
    author: 'Mio',
    date: 'October 15, 2026'
  }
]

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <header>
        <h1>The Crimson Archive</h1>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<BlogPostsPage posts={posts} />} />
          <Route path="/post/:id" element={<IndividualPostPage posts={posts} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer>
        <p>© 2026 The Crimson Archive. All rights reserved.</p>
      </footer>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
