import fs from "node:fs";
import path from "node:path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import mdxComponents from "@/components/mdx/mdxComponents";

const contentDir = path.join(process.cwd(), "src/content/blogs");

export async function compileBlogMdx(relativePath) {
  const fullPath = path.join(contentDir, relativePath);
  const source = fs.readFileSync(fullPath, "utf8");
  return compileMDX({
    source,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        // Allow `import MyChart from '...'` in MDX for client-side charts
        useDynamicImport: true,
      },
    },
  });
}
