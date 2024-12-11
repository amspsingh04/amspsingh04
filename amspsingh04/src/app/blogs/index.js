import dynamic from "next/dynamic";

// Dynamically import the entire Blogs component and disable SSR
const ClientSideBlogs = dynamic(() => import("../../app/blogs/page"), {
  ssr: false,
});

export default function Blogs() {
  return (
    <>
      <ClientSideBlogs />
    </>
  );
}
