"use client";

export default function Sidebar({ blogs, onSelect }) {
  return (
    <div className="sidebar">
      <h4 style={{ textAlign: "center" }}>Blog List</h4>
      <ul>
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="blogItem"
            onClick={() => onSelect(blog)}
          >
            <h5>{blog.title}</h5>
            <p style={{ color: "#666" }}>{blog.date}</p>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #222;
          color: white;
          padding: 10px;
          overflow-y: auto;
        }
        .blogItem {
          cursor: pointer;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .blogItem:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
}
