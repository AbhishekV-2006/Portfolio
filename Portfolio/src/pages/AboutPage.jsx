export default function AboutPage() {
  return (
    <section className="section about-page section-muted">
      <div className="container">
        <div className="about-intro">
          <div>
            <p className="section-tag">About me</p>
            <h1>Curious about how good software comes together.</h1>
          </div>
          <p className="about-intro-summary">
            I like working where thoughtful interfaces meet solid systems: turning a rough idea into something people can understand and use.
          </p>
        </div>

        <div className="about-layout">
          <article className="content-card about-story">
            <p className="about-card-label">The short version</p>
            <p>
              I am a Computer Science and Engineering student at NIT Warangal interested in full-stack web development, database systems, and competitive programming.
            </p>
            <p>
              My academic background includes Data Structures & Algorithms, Database Management Systems, Operating Systems, and Object-Oriented Programming. I enjoy building products that balance usability, structure, and reliability.
            </p>
          </article>

          <aside className="about-focus-panel">
            <p className="about-card-label">What I bring</p>
            <div className="about-focus-item">
              <span>01</span>
              <div>
                <h2>Product thinking</h2>
                <p>Clear flows, useful details, and interfaces that stay out of the way.</p>
              </div>
            </div>
            <div className="about-focus-item">
              <span>02</span>
              <div>
                <h2>Systems mindset</h2>
                <p>Reliable APIs, structured data, and maintainable foundations.</p>
              </div>
            </div>
          </aside>
        </div>

        <div className="about-skills">
          <div>
            <p className="section-tag">Areas of interest</p>
            <h2>Learning by making.</h2>
          </div>
          <ul className="about-skill-list">
            <li>Full-stack development</li>
            <li>Database design</li>
            <li>Competitive programming</li>
            <li>API architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}