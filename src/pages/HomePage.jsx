import React from 'react'

function HeroSection({ profile }) {
    return (
        <div className="container hero-grid">
            <h1>{profile.name}</h1>
            <p>{profile.role}</p>
            <p>{profile.summary}</p>
            <ul>
                {profile.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </div>
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
    <section>
        <HeroSection profile={profile} />
    </section>
  )
}

export default HomePage