import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Coverposal — AI Upwork Proposal Generator';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0F1E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo row */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '48px' }}>
          <div
            style={{
              width: 44,
              height: 44,
              background: '#4F46E5',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 14,
              fontSize: 22,
            }}
          >
            📄
          </div>
          <span style={{ fontSize: 28, fontWeight: 700, color: '#F9FAFB', letterSpacing: '-0.5px' }}>
            Coverposal
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#F9FAFB',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: 28,
          }}
        >
          Win More Jobs.{'\n'}Write Less.
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 24,
            color: '#6B7280',
            lineHeight: 1.5,
            maxWidth: 600,
            marginBottom: 56,
          }}
        >
          Paste a job description, add your resume. Get a tailored proposal in 30 seconds.
        </div>

        {/* Steps row */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Paste Job Description', 'Add Your Resume', 'Get Your Proposal'].map((step, i) => (
            <div
              key={i}
              style={{
                background: '#111827',
                border: '1px solid #1F2937',
                borderRadius: 10,
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontSize: 16,
                color: '#9CA3AF',
              }}
            >
              <span style={{ color: '#818CF8', fontWeight: 700, fontSize: 14 }}>0{i + 1}</span>
              {step}
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 48,
            right: 96,
            background: '#4F46E5',
            borderRadius: 999,
            padding: '8px 20px',
            fontSize: 15,
            color: 'white',
            fontWeight: 600,
          }}
        >
          Free to Try
        </div>
      </div>
    ),
    { ...size }
  );
}
