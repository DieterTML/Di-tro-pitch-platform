// Brand icons drawn in the same outline style as the lucide icons
// (lucide-react no longer ships brand logos).

const Icon = ({ size = 20, children }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const InstagramIcon = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </Icon>
);

export const TikTokIcon = (props) => (
  <Icon {...props}>
    <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M14 3c.4 2.6 2.4 4.6 5 5" />
  </Icon>
);

export const SpotifyIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M7 9.6c3.4-1 7.2-.7 10 1" />
    <path d="M7.6 12.7c2.7-.8 5.6-.5 8 .9" />
    <path d="M8.3 15.7c2-.5 4.1-.3 5.9.7" />
  </Icon>
);

export const SoundCloudIcon = (props) => (
  <Icon {...props}>
    <path d="M10 17V9.6a5 5 0 0 1 9.4 2.1A3 3 0 0 1 19.5 17H10Z" />
    <path d="M2 14v3" />
    <path d="M4.7 12v5" />
    <path d="M7.4 10.5V17" />
  </Icon>
);
