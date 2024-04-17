import type { Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio | Vonn Pactol",
  description: "List of informations, projects and blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#121212]">{children}</body>
    </html>
  );
}