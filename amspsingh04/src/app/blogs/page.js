"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import Sidebar and ContentPane to disable SSR
const Sidebar = dynamic(() => import("./sidebar"), { ssr: false });
const ContentPane = dynamic(() => import("./content"), { ssr: false });

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchedBlogs = [
      {
        title: "Moral Policing is the Key",
        date: "2020-05-19",
        content: `
The Instagram group that was busted recently had chats that plucked a string which has so often been plucked by news coming out of New Delhi, 
and which plays to the tune of fear and insecurity. It is not normal and is not humane. 
The rot is in the house.  
We need to realize that we are breeding these twisted new ideas and that, if nothing is done now, there will never be a stop.

Where has gone the courtesy and respect for women?  
Where has gone the extreme high regard for women, which we once had? Was it all 20th century? Do we not need it in the 21st century?

No, we need it more than ever before.
Our culture, over the course of history, has always, and unfailingly, propagated respect for women. 
We do not need to look back at our history to understand that this is wrong. It must be conscientious. 
The unfortunate incident could have been avoided only if they had the knowledge of societal conduct, which can only arise from a proper upbringing, 
and it is solely up to the parents. Now start moral policing.

The orthodox society will downplay it with “Boys will be boys”, and it will soon be out of our minds. We need to revolt against this archaic thought process 
if we want to be a nation where peace is eternal and safety omnipresent. Now, it is time that we start doing what is correct and discard what is wrong. 

We, the youth of India, must now come together to make the world a better place. Otherwise, we are collectively lost as a society.
        `,
        author: "Shourya Pratap Singh",
      },
    ];
    setBlogs(fetchedBlogs);
  }, []);

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
          height: 100vh; /* Full viewport height */
          margin: 0;
        }
      `}</style>
    </>
  );
}
