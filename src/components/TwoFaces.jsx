import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { artistData } from "../data/artistData";

const MIN = 6;
const MAX = 94;

const clamp = (value) => Math.min(MAX, Math.max(MIN, value));

// 0 in the middle, 1 when that face has taken over completely
const takeover = (share) => Math.max(0, (share - 50) / (MAX - 50));

// 0..1 over a range of the takeover, for fading things in and out
const ramp = (value, from, to) =>
  Math.min(1, Math.max(0, (value - from) / (to - from)));

function TwoFaces() {
  const { intro, images, faces } = artistData.twoFaces;

  // where the line sits, in percent from the left (= share of the blue face)
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

  const blue = takeover(split);
  const red = takeover(100 - split);
  const focus = Math.max(blue, red);
  const strength = { blue, red };

  return (
    <div className="two-faces">
      <h3 className="two-faces-title">2 FACES</h3>
      <p className="two-faces-intro">{intro}</p>

      <div
        className="two-faces-frame"
        ref={frameRef}
        style={{
          "--split": `${split}%`,
          "--blue-strength": blue,
          "--red-strength": red,
          "--focus": focus,
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        <img
          className="two-faces-image"
          src={images.base}
          alt="Diètro, half lit blue and half lit red, with his genres projected on his face"
          draggable="false"
        />

        {/* colour washes that flow in from the side you drag toward */}
        <img
          className="two-faces-image two-faces-wash two-faces-wash-blue"
          src={images.blue}
          alt=""
          draggable="false"
        />
        <img
          className="two-faces-image two-faces-wash two-faces-wash-red"
          src={images.red}
          alt=""
          draggable="false"
        />

        {/* the face you drag away from goes dark */}
        <div className="two-faces-dim two-faces-dim-red" />
        <div className="two-faces-dim two-faces-dim-blue" />

        {/* black fade from the lips down, so the text reads clearly */}
        <div className="two-faces-shade" />

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

        {faces.map((face) => (
          <div
            className={`face-caption face-caption-${face.side}`}
            key={face.side}
            // the short captions make way once a face takes over
            style={{ opacity: 1 - ramp(focus, 0.1, 0.4) }}
          >
            <span className="face-caption-name">{face.name}</span>
            <strong>{face.mood}</strong>
            <span className="face-caption-genres">
              {face.genres.join(" · ")}
            </span>
            <p>{face.line}</p>
          </div>
        ))}

        {/* the full story of the face that has taken over */}
        {faces.map((face) => (
          <div
            className={`face-story face-story-${face.side}`}
            key={face.side}
            style={{ opacity: ramp(strength[face.side], 0.35, 0.7) }}
            aria-hidden={strength[face.side] < 0.35}
          >
            <span className="face-caption-name">{face.name}</span>
            <p>{face.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TwoFaces;
