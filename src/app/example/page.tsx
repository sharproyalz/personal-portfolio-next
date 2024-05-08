import { MDXRemote } from "next-mdx-remote/rsc";
import { useState } from "react";

export default function TestPage() {
  const sample = `# Hello World

    This is from Server Components!
    `;
  return (
    <div className="wrapper">
      <textarea name="" id=""></textarea>

      <div className="prose prose-p:text-[#999999] prose-headings:text-gray ">
        <MDXRemote source={sample} />
      </div>
    </div>
  );
}
