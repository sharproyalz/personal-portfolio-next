import { MDXRemote } from "next-mdx-remote-client/rsc";

export default function MDXContent({ content }: { content: string }) {
  return <MDXRemote source={content} />;
}
