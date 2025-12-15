import './Hero.css'
import doctor from '../assets/doctor.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Your <span>Health</span>, <br /> Connected With Care.
        </h1>

        <p>
          Find trusted clinics and hospitals near you in just a few taps
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Book Appointment</button>
          <button className="btn-secondary">Find Emergency Care</button>
        </div>

        <div className="stats">
          <div><h3>25+</h3><p>Verified Doctors</p></div>
          <div><h3>14+</h3><p>Partner Hospitals</p></div>
          <div><h3>18+</h3><p>Diagnostic Centers</p></div>
          <div><h3>10+</h3><p>Medical Clinics</p></div>
        </div>
      </div>

      <div className="hero-right">
        <img src={doctor} alt="Doctor" />
      </div>
    </section>
  )
}
