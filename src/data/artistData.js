export const artistData = {
  name: "DIÈTRO",
  role: "DJ / PRODUCER",
  country: "BELGIUM",

  colors: {
    blue: "#0076ff",
    red: "#ff001a",
  },

  bio: "",

  // "2 FACES": the two musical identities of Diètro. The genres match the
  // ones projected onto the face in the photo; blue is the left of the
  // face, red the right.
  twoFaces: {
    intro: "One person, two identities",
    images: {
      base: "/media/two-faces/2-faces.jpg",
      blue: "/media/two-faces/2-faces-blue.jpg",
      red: "/media/two-faces/2-faces-red.jpg",
    },
    faces: [
      {
        side: "blue",
        name: "BLUE SIDE",
        mood: "Darkness & Intensity",
        genres: ["Techno", "Electronic", "Trance"],
        line: "Where the lights go out. Deep, raw and relentless.",
        // shown when the blue face takes over
        story:
          "Step into the darker side of Diètro. A world where techno, trance and electronic sounds collide. Driven by powerful basslines, rhythms and raw underground energy.",
      },
      {
        side: "red",
        name: "RED SIDE",
        mood: "Energy & Emotion",
        genres: ["Dance", "House", "Pop"],
        line: "Where the energy rises. Euphoric, warm and full of emotion.",
        // shown when the red face takes over
        story:
          "Discover the commercial side of Diètro. Filled with melodies, uplifting rhythms and feel-good energy. A place where dance, house and pop come together.",
      },
    ],

    // the 2 FACES event (details from the event poster)
    event: {
      date: "02.05.2026",
      day: "Saturday 2 May 2026",
      venue: "Jeugdhuis New Gen",
      artwork: "/media/two-faces/event-artwork.jpg",
      intro:
        "The concept, brought to life. One night, two stages, each with its own sound.",
      stages: [
        {
          side: "red",
          name: "RED STAGE",
          artists: ["Boy&Girl", "Diètro", "Whosalp", "Denoo", "Boey", "Pandoa"],
        },
        {
          side: "blue",
          name: "BLUE STAGE",
          artists: ["Double R", "M-Pulsive", "RVBBE"],
        },
      ],
    },
  },

  stats: [
    {
      value: "",
      label: "SPOTIFY STREAMS",
    },
    {
      value: "",
      label: "TIKTOK VIEWS",
    },
    {
      value: "",
      label: "INSTAGRAM VIEWS",
    },
  ],

  highlights: [
    {
      year: "2026",
      title: "",
      location: "",
      image: "/media/live/live-01.jpg",
    },
    {
      year: "2026",
      title: "",
      location: "",
      image: "/media/live/live-02.jpg",
    },
    {
      year: "2026",
      title: "",
      location: "",
      image: "/media/live/live-03.jpg",
    },
  ],

  releases: [
    {
      title: "",
      artists: "",
      label: "",
      artwork: "/media/releases/release-01.jpg",
      link: "",
    },
    {
      title: "",
      artists: "",
      label: "",
      artwork: "/media/releases/release-02.jpg",
      link: "",
    },
    {
      title: "",
      artists: "",
      label: "",
      artwork: "/media/releases/release-03.jpg",
      link: "",
    },
  ],

  contact: {
    email: "hello@dietromusic.com",
    phone: "+32 489 28 70 15",
    website: "www.dietromusic.com",
    instagram: "",
    spotify: "",
    tiktok: "",
  },
};