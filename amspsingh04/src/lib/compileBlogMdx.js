import fs from "node:fs";
import path from "node:path";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

const contentDir = path.join(process.cwd(), "src/content/blogs");

/**
 * Serialize MDX for <MDXRemote /> (see MdxRemoteBody.jsx).
 * Uses next-mdx-remote/serialize instead of /rsc compileMDX — compatible with React 19 dev.
 */
export async function serializeBlogMdx(relativePath) {
  const fullPath = path.join(contentDir, relativePath);
  const source = fs.readFileSync(fullPath, "utf8");
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      useDynamicImport: true,
    },
  });
}
