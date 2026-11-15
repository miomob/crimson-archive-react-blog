
import { NavLink } from 'react-router'
import { useTheme } from '../ThemeContext'

function Navbar() {
const { theme, toggleTheme } = useTheme()
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/contact">
        Contact
      </NavLink>
    <button type="button" onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
    </nav>
  )
}

export default Navbar
