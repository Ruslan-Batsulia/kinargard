import localFont from "next/font/local";

export const geistSans = localFont({
  src: [
    { path: "./../../public/fonts/GeistVF.woff2", weight: "100 900" },
    // { path: "./../../public/fonts/GeistVF.woff", weight: "100 900" },
  ],
  variable: "--font-geist-sans",
});

export const geistMono = localFont({
  src: [
    { path: "./../../public/fonts/GeistMonoVF.woff2", weight: "100 900" },
    // { path: "./../../public/fonts/GeistMonoVF.woff", weight: "100 900" },
  ],
  variable: "--font-geist-mono",
});
