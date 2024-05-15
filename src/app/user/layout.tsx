import { Footer } from "~/components/footer";
import "~/styles/globals.css";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <Footer />
    </>
  );
}
