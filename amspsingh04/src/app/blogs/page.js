"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import blogs from "./blogData"; // NEW

// Dynamically import Sidebar and ContentPane to disable SSR
const Sidebar = dynamic(() => import("./sidebar"), { ssr: false });
const ContentPane = dynamic(() => import("./content"), { ssr: false });

export default function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleSelectBlog = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <>
      <div className="container">
        <Sidebar blogs={blogs} onSelect={handleSelectBlog} />
        <ContentPane selectedBlog={selectedBlog} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          height: 100vh;
          margin: 0;
        }
      `}</style>
    </>
  );
}
