import { artistData } from "../data/artistData";

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-index">01</div>

      <div className="about-header">
        <div>
          <p className="eyebrow">THE ARTIST</p>

          <h2 className="huge-title">
            THIS IS
            <br />
            <span className="gradient-text">DIÈTRO.</span>
          </h2>
        </div>

        <div className="about-copy">
          {artistData.bio ? (
            <p>{artistData.bio}</p>
          ) : (
            <>
              <h3>NEW ARTIST STORY COMING SOON.</h3>

              <p>
                Updated 2026 biography, career highlights and artist
                positioning will be added here.
              </p>
            </>
          )}

          <div className="about-details">
            <div>
              <span>BASED IN</span>
              <strong>BELGIUM</strong>
            </div>

            <div>
              <span>ARTIST</span>
              <strong>DJ / PRODUCER</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="large-photo">
        <img
          src="/media/artist/portrait-01.jpg"
          alt="Diètro"
        />

        <div className="image-placeholder">
          <span>ARTIST PHOTO</span>
          <small>portrait-01.jpg</small>
        </div>
      </div>
    </section>
  );
}

export default About;