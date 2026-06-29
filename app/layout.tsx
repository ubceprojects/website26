import type { Metadata } from "next";
import "./globals.css";
import { leagueSpartan, poppins, sofiaPro } from "./fonts";
import Nav from "./nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "eProjects UBC — Where Start-Ups Begin",
    template: "%s — eProjects UBC",
  },
  description:
    "eProjects UBC is the student-run startup accelerator where start-ups begin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.variable} ${sofiaPro.variable} ${poppins.variable}`}
    >
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
