'use client';
import { useState } from 'react';

export default function WriterPage() {
  const [files, setFiles] = useState(null);
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!files) return;
    setLoading(true);
    const form = new FormData();
    Array.from(files).forEach(f => form.append('files', f));

    const res = await fetch('/writer/generate-report', {
      method: 'POST',
      body: form
    });

    const html = await res.text();
    const match = html.match(/<div id="report">([\s\S]*?)<\/div>/);
    setReport(match ? match[1] : 'Error parsing report');
    setLoading(false);
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📄 Writer</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={e=>setFiles(e.target.files)} />
        <button type="submit" disabled={loading}>{ loading ? 'Generating...' : 'Generate' }</button>
      </form>
      { report && 
        <div id="report" style={{ whiteSpace: 'pre-wrap', marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          {report}
        </div> 
      }
    </div>
  );
}
