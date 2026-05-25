import { useRef } from 'react';
import { InputMethod } from '@/lib/apiUtils';
import { clearFile } from '@/lib/fileUtils';

interface ResumeInputProps {
  resume: string;
  setResume: (value: string) => void;
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
  resumeInputMethod: InputMethod;
  setResumeInputMethod: (method: InputMethod) => void;
  handleResumeFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ResumeInput({
  resume,
  setResume,
  resumeFile,
  setResumeFile,
  resumeInputMethod,
  setResumeInputMethod,
  handleResumeFileChange,
}: ResumeInputProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
            02 · Your Resume
          </span>
          <p className="text-[#6B7280] text-xs mt-0.5">Paste your resume or upload a file</p>
        </div>
        <div className="flex bg-[#0A0F1E] border border-[#1F2937] rounded-lg p-0.5 gap-0.5 flex-shrink-0 ml-4">
          <button
            onClick={() => setResumeInputMethod('text')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              resumeInputMethod === 'text'
                ? 'bg-indigo-600 text-white'
                : 'text-[#6B7280] hover:text-[#9CA3AF]'
            }`}
          >
            Text
          </button>
          <button
            onClick={() => setResumeInputMethod('file')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              resumeInputMethod === 'file'
                ? 'bg-indigo-600 text-white'
                : 'text-[#6B7280] hover:text-[#9CA3AF]'
            }`}
          >
            File
          </button>
        </div>
      </div>

      {resumeInputMethod === 'text' ? (
        <textarea
          rows={8}
          className="w-full bg-[#0A0F1E] border border-[#1F2937] rounded-lg px-4 py-3 text-sm text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 resize-none transition-colors leading-relaxed"
          placeholder="Paste your resume text here..."
          value={resume}
          onChange={(e) => setResume(e.target.value)}
        />
      ) : (
        <div>
          <input
            ref={fileRef}
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleResumeFileChange}
            className="hidden"
          />
          {!resumeFile ? (
            <button
              onClick={() => fileRef.current?.click()}
              className="w-full border-2 border-dashed border-[#1F2937] hover:border-indigo-500/40 rounded-lg p-8 text-center transition-colors group"
            >
              <svg
                className="mx-auto mb-3 text-[#374151] group-hover:text-indigo-400 transition-colors"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <p className="text-sm font-medium text-[#6B7280] group-hover:text-[#9CA3AF] transition-colors">
                Click to upload your resume
              </p>
              <p className="text-xs text-[#4B5563] mt-1">PDF, DOC, DOCX, TXT</p>
            </button>
          ) : (
            <div className="flex items-center justify-between bg-[#0A0F1E] border border-[#10B981]/30 rounded-lg px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#10B981]/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 1.5h6.5L12 5v7.5H2V1.5z"
                      stroke="#10B981"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#F9FAFB]">{resumeFile.name}</p>
                  <p className="text-xs text-[#6B7280]">{(resumeFile.size / 1024).toFixed(1)} KB</p>
                </div>
              </div>
              <button
                onClick={() => clearFile(fileRef, setResumeFile)}
                className="text-xs text-[#4B5563] hover:text-[#9CA3AF] transition-colors"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
