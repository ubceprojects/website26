import localFont from "next/font/local";
import { League_Spartan, Poppins } from "next/font/google";

// Large titles — League Spartan (Brandbook: "Large Titles")
export const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league",
  display: "swap",
});

// Body text — Poppins (Brandbook: "Body Text: Poppins Light")
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

// Subtitles & headings — Sofia Pro (Brandbook), self-hosted from /public/fonts
export const sofiaPro = localFont({
  src: [
    { path: "../public/fonts/SofiaPro-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/SofiaPro-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/SofiaPro-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/SofiaPro-Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/SofiaPro-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-sofia",
  display: "swap",
});
