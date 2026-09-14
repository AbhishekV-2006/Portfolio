
import { Link } from 'react-router-dom'
import profilePhoto from '../assets/photo_OP.jpg'

function HeroSection({ profile }) {
  return (
    <>
      <div className="container home-profile-photo-row">
        <div className="home-profile-photo">
          <img src={profilePhoto} alt={`${profile.name} profile`} />
        </div>
      </div>

      <div className="container home-hero-grid">
      <div className="home-hero-copy">
        <p className="section-tag">Portfolio / 2026</p>
        <h1>{profile.name}</h1>
        <p className="home-hero-role">{profile.role}</p>
        <p className="home-hero-summary">{profile.summary}</p>
        <div className="home-hero-actions">
          <Link className="button button-primary" to="/projects">
            Explore my work <span aria-hidden="true">-&gt;</span>
          </Link>
          <Link className="button button-secondary" to="/contact">
            Start a conversation
          </Link>
        </div>
      </div>

      <aside className="home-hero-note" aria-label="Profile highlights">
        <div className="home-hero-note-mark" aria-hidden="true">AV</div>
        <p className="section-tag">Currently building</p>
        <h2>Useful software with a point of view.</h2>
        <p>I care about the small decisions that make products feel clear, dependable, and worth returning to.</p>
        <ul>
          {profile.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </aside>
      </div>
    </>
  )
}

function HomePage() {

    const profile = {
    name: 'Abhishek Manoj Vishwakarma',
    role: 'Computer Science and Engineering student at NIT Warangal',
    summary:
      'Roll No. 24CSB0B03, Bachelor of Technology in Computer Science and Engineering, minor in Management at the National Institute of Technology, Warangal.',
    highlights: [
      'CGPA 8.89 at NIT Warangal',
      'Focused on full-stack systems and databases',
      'Interested in product building and competitive programming',
    ],
  };

  return (
    <section className="home-page">
      <div className="home-hero">
        <HeroSection profile={profile} />
      </div>
      <div className="container home-stats" aria-label="Profile statistics">
        <div>
          <strong>8.89</strong>
          <span>CGPA at NIT Warangal</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Featured projects</span>
        </div>
        <div>
          <strong>Full-stack</strong>
          <span>Product and systems focus</span>
        </div>
      </div>
    </section>
  )
}

export default HomePage