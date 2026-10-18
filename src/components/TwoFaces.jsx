import { artistData } from "../data/artistData";

function TwoFaces() {
  const { tagline, faces } = artistData.twoFaces;

  return (
    <div className="two-faces">
      <div className="two-faces-heading">
        <h3 className="two-faces-title">
          <span className="two-faces-number">2</span> FACES
        </h3>

        <p className="two-faces-tagline">{tagline}</p>
      </div>

      <div className="two-faces-split">
        {faces.map((face) => (
          <article
            className={`face-panel face-panel-${face.side}`}
            key={face.side}
          >
            <div className="face-panel-image" />

            <div className="face-panel-info">
              <span className="face-panel-name">{face.name}</span>
              <strong>{face.mood}</strong>
              <small>{face.sound.join(" · ")}</small>
            </div>
          </article>
        ))}

        {/* where the two faces meet */}
        <div className="two-faces-seam" aria-hidden="true" />
      </div>
    </div>
  );
}

export default TwoFaces;
