import MainForm from '@/components/MainForm';

const steps = [
  {
    number: '01',
    title: 'Paste the Job',
    description: 'Copy any job description from Upwork, LinkedIn, or any job board',
  },
  {
    number: '02',
    title: 'Add Your Resume',
    description: 'Paste your resume text or upload a PDF or DOCX file',
  },
  {
    number: '03',
    title: 'Get Your Proposal',
    description: 'AI writes a tailored proposal or cover letter in seconds',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0F1E]">

      {/* Nav */}
      <nav className="border-b border-[#1F2937]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 bg-indigo-600 rounded-md flex items-center justify-center flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 1.5h6.5L12 5v7.5H2V1.5z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M8.5 1.5V5H12" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
                <path d="M4 7.5h6M4 9.5h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span
              className="font-bold text-white text-sm tracking-tight"
              style={{ fontFamily: 'var(--font-plus-jakarta)' }}
            >
              Coverposal
            </span>
          </div>
          <span className="text-xs text-[#4B5563] font-medium">Free · No signup needed</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 lg:py-16">

        {/* Hero */}
        <header className="mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-7">
            <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
            <span className="text-indigo-300 text-xs font-medium">AI-Powered · Free to Try</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
            Win More Jobs.<br />Write Less.
          </h1>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-lg">
            Paste a job description, add your resume. Get a tailored Upwork proposal
            or cover letter in 30 seconds.
          </p>
        </header>

        {/* How it works */}
        <section
          aria-label="How it works"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12"
        >
          {steps.map(({ number, title, description }) => (
            <div
              key={number}
              className="bg-[#111827] border border-[#1F2937] rounded-xl p-5"
            >
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                {number}
              </span>
              <h3 className="text-white font-semibold text-sm mt-2 mb-1">{title}</h3>
              <p className="text-[#6B7280] text-xs leading-relaxed">{description}</p>
            </div>
          ))}
        </section>

        {/* Main Form — client island */}
        <MainForm />

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-[#1F2937]">
          <p className="text-[#4B5563] text-xs">
            © {new Date().getFullYear()} Coverposal · Built to help freelancers win more jobs
          </p>
        </footer>

      </div>
    </div>
  );
}
