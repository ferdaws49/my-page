import { useEffect } from "react";
function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <p className="small-title">HELLO, I'M</p>

          <h1>
            Ferdaws
            <span>Maraach</span>
          </h1>

          <p className="speciality">Business Intelligence Graduate</p>

          <p className="intro">
            A little space to introduce myself, my interests and the things I
            love.
          </p>

          <a href="#about" className="explore-btn">
            Discover more
          </a>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <img src="/profile.jpg" alt="Ferdaous" />
          </div>

          <div className="decorative-circle"></div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <p className="section-label">01 — ABOUT ME</p>

        <h2>A little bit about me</h2>

        <p className="about-text">
          I'm Ferdaws, a Business Intelligence graduate from ISI mahdia. I enjoy
          technology, data, creativity and discovering new things.
        </p>
      </section>

      {/* DETAILS */}
      <section className="details">
        <p className="section-label">02 — MY DETAILS</p>

        <div className="details-grid">
          <div className="detail-card">
            <span>🎓</span>
            <h3>Education</h3>
            <p>Business Intelligence</p>
          </div>

          <div className="detail-card">
            <span>💻</span>
            <h3>Field</h3>
            <p>Information Technology</p>
          </div>

          <div className="detail-card">
            <span>📍</span>
            <h3>Based in</h3>
            <p>Mednine</p>
          </div>
        </div>
      </section>

      {/* INTERESTS */}
      <section className="interests">
        <p className="section-label">03 — THINGS I LIKE</p>

        <h2>My little interests</h2>

        <div className="interest-list">
          <div>Technology</div>
          <div>Data</div>
          <div>Creativity</div>
          <div>Learning</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Made with ♡ by ME</p>
      </footer>
    </div>
  );
}

export default App;
