import './Navbar.css'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" />

      <ul className="nav-links">
        <li>Home</li>
        <li>My Appointments</li>
        <li>Our Services</li>
      </ul>

      <div className="auth-buttons">
        <button className="btn-outline">Sign In</button>
        <button className="btn-filled">Sign Up</button>
      </div>
    </nav>
  )
}
