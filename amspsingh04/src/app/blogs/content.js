"use client";

export default function ContentPane({ selectedBlog }) {
  return (
    <div className="content-pane">
      {selectedBlog ? (
        <>
          <h3>{selectedBlog.title}</h3>
          <div className="content-box">
            <pre>{selectedBlog.content}</pre>
          </div>
        </>
      ) : (
        <p>Select a blog to view content</p>
      )}

      <style jsx>{`
        .content-pane {
          padding: 20px;
          flex: 1; 
          overflow-y: auto;
          color: #ffffff;
          background: #000000;
        }
        .content-box {
          white-space: pre-wrap; /* Preserves line breaks */
          font-family: 'Courier New', monospace;
          font-size: 14px;
          color: #ffffff;
        }
        pre {
          font-size: 14px;
          color: #ffffff;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
          overflow: auto;
        }
      `}</style>
    </div>
  );
}
