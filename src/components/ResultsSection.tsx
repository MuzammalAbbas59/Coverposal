import { ApplicationMaterials, DocumentType } from '@/lib/apiUtils';
import { copyToClipboard } from '@/lib/uiUtils';

interface ResultsSectionProps {
  materials: ApplicationMaterials;
  documentType: DocumentType;
}

function CopyButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      onClick={() => copyToClipboard(text)}
      className="flex items-center gap-1.5 bg-[#1F2937] hover:bg-[#374151] text-[#9CA3AF] hover:text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M1 8V1h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      {label}
    </button>
  );
}

export default function ResultsSection({ materials, documentType }: ResultsSectionProps) {
  return (
    <div className="space-y-3 pt-1">

      {/* Cover Letter / Proposal */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1F2937]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full" />
            <span className="text-sm font-semibold text-white">
              {documentType === 'cover-letter' ? 'Cover Letter' : 'Upwork Proposal'}
            </span>
          </div>
          <CopyButton text={materials.coverLetter} label="Copy" />
        </div>
        <div className="px-5 py-5">
          <pre
            className="whitespace-pre-wrap text-[#D1D5DB] text-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {materials.coverLetter}
          </pre>
        </div>
      </div>

      {/* Resume Bullet Points */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#1F2937]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-sm font-semibold text-white">Resume Bullet Points</span>
          </div>
          <CopyButton
            text={materials.resumeBulletPoints.join('\n')}
            label="Copy All"
          />
        </div>
        <div className="px-5 py-5 space-y-3">
          {materials.resumeBulletPoints.map((point, i) => (
            <div key={i} className="flex gap-3">
              <span className="text-xs font-bold text-[#4B5563] mt-0.5 flex-shrink-0 w-4 text-right">
                {i + 1}.
              </span>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
