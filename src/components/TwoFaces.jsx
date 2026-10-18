import { artistData } from "../data/artistData";

function TwoFaces() {
  const { image, faces } = artistData.twoFaces;

  return (
    <div className="two-faces">
      <h3 className="two-faces-title">2 FACES</h3>

      <div
        className="two-faces-split"
        style={{ "--two-faces-image": `url("${image}")` }}
      >
        {faces.map((face) => (
          <article
            className={`face-panel face-panel-${face.side}`}
            key={face.side}
          >
            <div className="face-panel-image" />

            <div className="face-panel-info">
              <span className="face-panel-name">{face.name}</span>
              <strong>{face.mood}</strong>
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
