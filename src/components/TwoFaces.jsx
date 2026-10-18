import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { artistData } from "../data/artistData";

const MIN = 6;
const MAX = 94;

const clamp = (value) => Math.min(MAX, Math.max(MIN, value));

// 1 while a face is at least half the picture, fading to 0.35 as the
// other face takes over
const emphasis = (share) =>
  share >= 50 ? 1 : 0.35 + 0.65 * Math.max(0, (share - MIN) / (50 - MIN));

function TwoFaces() {
  const { intro, images, faces } = artistData.twoFaces;

  // how much of the picture the blue face covers, in percent
  const [split, setSplit] = useState(50);
  const frameRef = useRef(null);
  const dragging = useRef(false);

  const moveTo = (clientX) => {
    const rect = frameRef.current.getBoundingClientRect();
    setSplit(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const handlePointerDown = (event) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (dragging.current) moveTo(event.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  const handleKeyDown = (event) => {
    const steps = {
      ArrowLeft: -5,
      ArrowRight: 5,
      Home: -100,
      End: 100,
    };

    if (event.key in steps) {
      event.preventDefault();
      setSplit((current) => clamp(current + steps[event.key]));
    }
  };

  const share = { blue: split, red: 100 - split };

  return (
    <div className="two-faces">
      <h3 className="two-faces-title">2 FACES</h3>
      <p className="two-faces-intro">{intro}</p>

      <div
        className="two-faces-frame"
        ref={frameRef}
        style={{ "--split": `${split}%` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <img
          className="two-faces-image"
          src={images.red}
          alt="Diètro, half lit red with Dance, House and Pop projected on his face"
          draggable="false"
        />

        <img
          className="two-faces-image two-faces-image-blue"
          src={images.blue}
          alt="Diètro, half lit blue with Techno, Electronic and Trance projected on his face"
          draggable="false"
        />

        <div
          className="two-faces-handle"
          role="slider"
          tabIndex={0}
          aria-label="Switch between the blue face and the red face"
          aria-valuemin={MIN}
          aria-valuemax={MAX}
          aria-valuenow={Math.round(split)}
          aria-valuetext={`Blue face ${Math.round(split)}%, red face ${Math.round(100 - split)}%`}
          onKeyDown={handleKeyDown}
        >
          <span className="two-faces-knob">
            <ChevronLeft size={18} />
            <ChevronRight size={18} />
          </span>
        </div>
      </div>

      <div className="two-faces-captions">
        {faces.map((face) => (
          <div
            className={`face-caption face-caption-${face.side}`}
            key={face.side}
            style={{ opacity: emphasis(share[face.side]) }}
          >
            <span className="face-caption-name">{face.name}</span>
            <strong>{face.mood}</strong>
            <span className="face-caption-genres">
              {face.genres.join(" · ")}
            </span>
            <p>{face.line}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TwoFaces;
