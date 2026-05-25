'use client';

import { useState } from 'react';
import { DocumentType, DetailLevel } from '@/lib/apiUtils';
import { useFileHandlers } from '@/hooks/useFileHandlers';
import { useMaterialsGenerator } from '@/hooks/useMaterialsGenerator';
import DocumentTypeSelector from '@/components/DocumentTypeSelector';
import DetailLevelSelector from '@/components/DetailLevelSelector';
import ResumeInput from '@/components/ResumeInput';
import JobDescriptionInput from '@/components/JobDescriptionInput';
import GenerateButton from '@/components/GenerateButton';
import ErrorAlert from '@/components/ErrorAlert';
import ResultsSection from '@/components/ResultsSection';

export default function MainForm() {
  const [documentType, setDocumentType] = useState<DocumentType>('cover-letter');
  const [detailLevel, setDetailLevel] = useState<DetailLevel>('detailed');

  const fileHandlers = useFileHandlers();
  const { materials, loading, error, generateMaterialsHandler, retryGeneration } =
    useMaterialsGenerator();

  const canGenerate =
    (fileHandlers.jobInputMethod === 'text'
      ? fileHandlers.jobDescription.trim().length > 0
      : !!fileHandlers.jobFile) &&
    (fileHandlers.resumeInputMethod === 'text'
      ? fileHandlers.resume.trim().length > 0
      : !!fileHandlers.resumeFile);

  const handleGenerate = () => {
    generateMaterialsHandler(
      fileHandlers.resume,
      fileHandlers.jobDescription,
      documentType,
      detailLevel,
      fileHandlers.resumeInputMethod,
      fileHandlers.jobInputMethod,
      fileHandlers.resumeFile,
      fileHandlers.jobFile
    );
  };

  const handleRetry = () => {
    retryGeneration();
    handleGenerate();
  };

  return (
    <div className="space-y-3">
      {/* Step 1 */}
      <JobDescriptionInput {...fileHandlers} />

      {/* Step 2 */}
      <ResumeInput {...fileHandlers} />

      {/* Step 3 — Options */}
      <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-5">
        <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4">
          03 · Options
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-[#6B7280] font-medium mb-2">Document Type</p>
            <DocumentTypeSelector
              documentType={documentType}
              setDocumentType={setDocumentType}
            />
          </div>
          <div>
            <p className="text-xs text-[#6B7280] font-medium mb-2">Detail Level</p>
            <DetailLevelSelector
              detailLevel={detailLevel}
              setDetailLevel={setDetailLevel}
            />
          </div>
        </div>
      </div>

      <ErrorAlert error={error} />

      <GenerateButton
        loading={loading}
        documentType={documentType}
        onGenerate={handleGenerate}
        onRetry={handleRetry}
        showRetry={!!materials}
        canGenerate={canGenerate}
      />

      {materials && (
        <ResultsSection materials={materials} documentType={documentType} />
      )}
    </div>
  );
}
