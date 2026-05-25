interface ErrorAlertProps {
  error: string;
}

export default function ErrorAlert({ error }: ErrorAlertProps) {
  if (!error) return null;

  return (
    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        className="flex-shrink-0 mt-0.5"
      >
        <circle cx="7.5" cy="7.5" r="6.5" stroke="#EF4444" strokeWidth="1.2" />
        <path
          d="M7.5 4.5v4M7.5 10.5v.5"
          stroke="#EF4444"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-red-400 text-sm">{error}</p>
    </div>
  );
}
