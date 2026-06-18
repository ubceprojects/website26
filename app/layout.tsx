import type { Metadata } from "next";
import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";

export const metadata: Metadata = {
  title: {
    default: "eProjects UBC",
    template: "%s - eProjects UBC",
  },
  description: "eProjects UBC - official website.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
