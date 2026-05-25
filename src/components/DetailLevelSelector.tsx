import { DetailLevel } from '@/lib/apiUtils';

interface DetailLevelSelectorProps {
  detailLevel: DetailLevel;
  setDetailLevel: (level: DetailLevel) => void;
}

const options: { value: DetailLevel; label: string }[] = [
  { value: 'brief', label: 'Brief' },
  { value: 'detailed', label: 'Detailed' },
];

export default function DetailLevelSelector({ detailLevel, setDetailLevel }: DetailLevelSelectorProps) {
  return (
    <div className="flex bg-[#0A0F1E] border border-[#1F2937] rounded-lg p-0.5 gap-0.5">
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setDetailLevel(value)}
          className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-colors duration-150 ${
            detailLevel === value
              ? 'bg-indigo-600 text-white'
              : 'text-[#6B7280] hover:text-[#9CA3AF]'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
