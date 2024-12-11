// content.js
export default function ContentPane({ selectedBlog }) {
  if (!selectedBlog) {
    return (
      <div className="contentPane">
        <p>Select a blog to view its content.</p>
        <style jsx>{`
          .contentPane {
            flex: 1;
            background: #1a1a1a;
            color: #fff;
            padding: 20px;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="contentPane">
      <h1>{selectedBlog.title}</h1>
      <p><strong>Date:</strong> {selectedBlog.date}</p>
      <p><strong>Author:</strong> {selectedBlog.author}</p>
      <div className="blogContent">{selectedBlog.content}</div>
      <style jsx>{`
        .contentPane {
          flex: 1;
          background: #1a1a1a;
          color: #fff;
          padding: 20px;
        }
        h1 {
          color: gold;
        }
        .blogContent {
          margin-top: 20px;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
}
