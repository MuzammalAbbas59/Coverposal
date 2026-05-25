import { DocumentType } from '@/lib/apiUtils';

interface DocumentTypeSelectorProps {
  documentType: DocumentType;
  setDocumentType: (type: DocumentType) => void;
}

const options: { value: DocumentType; label: string }[] = [
  { value: 'cover-letter', label: 'Cover Letter' },
  { value: 'proposal', label: 'Upwork Proposal' },
];

export default function DocumentTypeSelector({ documentType, setDocumentType }: DocumentTypeSelectorProps) {
  return (
    <div className="flex bg-[#0A0F1E] border border-[#1F2937] rounded-lg p-0.5 gap-0.5">
      {options.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setDocumentType(value)}
          className={`flex-1 py-2 px-3 rounded-md text-xs font-medium transition-colors duration-150 ${
            documentType === value
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
