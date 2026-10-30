// Inline SVG logo: a house whose foundation sits on a drain line.
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        viewBox="0 0 40 40"
        className="h-9 w-9 shrink-0"
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="10" fill={inverted ? "#ffffff" : "#102a43"} />
        <path
          d="M10 21 L20 12 L30 21 V28 H10 Z"
          fill="none"
          stroke={inverted ? "#102a43" : "#ffffff"}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M7 32 H33"
          stroke="#4a98d6"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeDasharray="1 4.5"
        />
        <path
          d="M20 18.5 q-3 4.5 0 6.5 q3 -2 0 -6.5z"
          fill="#4a98d6"
        />
      </svg>
      <span
        className={`text-lg font-bold tracking-tight ${
          inverted ? "text-white" : "text-ink-900"
        }`}
      >
        Din<span className={inverted ? "text-brand-300" : "text-brand-600"}>Drenering</span>
      </span>
    </span>
  );
}
