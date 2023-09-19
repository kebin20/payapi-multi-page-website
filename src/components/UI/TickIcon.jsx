export default function TickIcon({ hidden }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path
        d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
        fill={hidden ? "transparent" : "#ba4270"}
      />
    </svg>
  );
}
