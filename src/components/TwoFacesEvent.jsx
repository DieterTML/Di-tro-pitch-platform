import { artistData } from "../data/artistData";

function TwoFacesEvent() {
  const { event } = artistData.twoFaces;
  const artistCount = event.stages.reduce(
    (total, stage) => total + stage.artists.length,
    0
  );

  const facts = [
    { value: event.stages.length, label: "STAGES" },
    { value: artistCount, label: "ARTISTS" },
    { value: 1, label: "NIGHT" },
  ];

  return (
    <div className="two-faces-event">
      <div className="event-artwork">
        <img
          src={event.artwork}
          alt={`2 FACES event poster, ${event.day} at ${event.venue}`}
        />
      </div>

      <div className="event-info">
        <p className="eyebrow">THE EVENT</p>

        <h3 className="event-title">
          2 FACES
          <span>{event.date}</span>
        </h3>

        <p className="event-intro">{event.intro}</p>

        <p className="event-venue">{event.venue}</p>

        <div className="event-stages">
          {event.stages.map((stage) => (
            <div
              className={`event-stage event-stage-${stage.side}`}
              key={stage.side}
            >
              <span className="event-stage-name">{stage.name}</span>

              <ul>
                {stage.artists.map((artist) => (
                  <li
                    key={artist}
                    className={artist === "Diètro" ? "event-artist-self" : ""}
                  >
                    {artist}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="event-facts">
          {facts.map((fact) => (
            <div key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TwoFacesEvent;
