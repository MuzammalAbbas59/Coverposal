import { DocumentType } from '@/lib/apiUtils';

interface GenerateButtonProps {
  loading: boolean;
  documentType: DocumentType;
  onGenerate: () => void;
  onRetry: () => void;
  showRetry: boolean;
  canGenerate: boolean;
}

export default function GenerateButton({
  loading,
  documentType,
  onGenerate,
  onRetry,
  showRetry,
  canGenerate,
}: GenerateButtonProps) {
  return (
    <div className="space-y-2">
      <div className="flex gap-2.5">
        <button
          onClick={onGenerate}
          disabled={loading}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl transition-colors duration-150 text-sm flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            `Generate ${documentType === 'cover-letter' ? 'Cover Letter' : 'Proposal'}`
          )}
        </button>

        {showRetry && !loading && (
          <button
            onClick={onRetry}
            className="bg-[#111827] border border-[#1F2937] hover:border-[#374151] text-[#9CA3AF] hover:text-white font-medium py-3.5 px-5 rounded-xl transition-colors duration-150 text-sm"
          >
            Retry
          </button>
        )}
      </div>

      {!canGenerate && !loading && (
        <p className="text-center text-xs text-[#4B5563]">
          Fill in the job description and resume above to generate
        </p>
      )}
    </div>
  );
}
