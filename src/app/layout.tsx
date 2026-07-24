import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Degree SpeedRun — Finish a WGU Bachelor's Faster & Cheaper",
  description:
    "A step-by-step plan to earn a WGU bachelor's degree fast: transfer in cheap credits from Sophia, Study.com, Saylor, and CLEP, then finish at WGU in as few flat-rate terms as possible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
        <footer className="border-t border-stone-200 py-8 dark:border-stone-800">
          <div className="mx-auto max-w-6xl px-4 text-sm text-stone-500 dark:text-stone-400">
            <p className="mb-2 font-medium">
              Degree SpeedRun is an independent planning guide — not affiliated with WGU, Sophia
              Learning, Study.com, Saylor Academy, or the College Board.
            </p>
            <p>
              Prices, transfer policies, and course lists change. Always confirm against the official
              WGU transfer pathway for your program and an enrollment counselor before paying for
              anything.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
