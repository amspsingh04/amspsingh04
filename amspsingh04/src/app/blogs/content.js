import blogs from './blogsData';

export default function BlogDetail({ params }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <div style={{ padding: '2rem', color: 'white' }}>404 - Blog not found</div>;
  }

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', minHeight: '100vh', color: 'white' }}>
      <h1 style={{ color: 'gold' }}>{blog.title}</h1>
      <p><strong>Date:</strong> {blog.date}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <div style={{ marginTop: '2rem' }}>
        {blog.isPDF ? (
          <iframe
            src={blog.pdfSrc}
            width="100%"
            height="600px"
            title={blog.title}
            style={{ border: '1px solid #444', borderRadius: '8px' }}
          />
        ) : (
          <p style={{ whiteSpace: 'pre-wrap' }}>{blog.content}</p>
        )}
      </div>
    </div>
  );
}
