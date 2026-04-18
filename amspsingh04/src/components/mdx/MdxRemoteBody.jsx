"use client";

import { MDXRemote } from "next-mdx-remote";
import mdxComponents from "./mdxComponents";

/** Client-side MDX renderer — avoids React 19 dev issues with next-mdx-remote/rsc compileMDX. */
export default function MdxRemoteBody({
  compiledSource,
  scope = {},
  frontmatter = {},
}) {
  if (!compiledSource) return null;

  return (
    <MDXRemote
      compiledSource={compiledSource}
      scope={scope}
      frontmatter={frontmatter}
      components={mdxComponents}
    />
  );
}
