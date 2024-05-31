import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Footer } from "~/components/footer";
import Navigation from "~/components/navigation";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";

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
      <TRPCReactProvider>
        <body className="bg-[#ffffff] text-[12px]  dark:bg-[#111111] dark:text-[#999999] md:text-[16px]">
          {children}

          <Toaster />

          <Footer />
        </body>
      </TRPCReactProvider>
    </html>
  );
}
