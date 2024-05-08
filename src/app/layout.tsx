import type { Metadata } from "next";
import { Footer } from "~/components/footer";
import Navigation from "~/components/navigation";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio | Vonn Pactol",
  description: "List of information, projects, and blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Remove 'dark' to switch on light mode
    <html lang="en" className="dark">
      <body className="bg-[#ffffff] text-[12px]  md:text-[16px] dark:bg-[#111111] dark:text-[#999999]">
        {children}

        <Footer />
      </body>
    </html>
  );
}
