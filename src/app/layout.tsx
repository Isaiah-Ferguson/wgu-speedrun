import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ProgramProvider } from "@/components/ProgramProvider";
import ProgramBar from "@/components/ProgramBar";
import { PaceProvider } from "@/components/PaceProvider";

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
        <ProgramProvider>
         <PaceProvider>
          <Nav />
          <ProgramBar />
          <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>
         </PaceProvider>
        </ProgramProvider>
        <footer className="mt-10 border-t border-ink">
          <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-4 px-4 py-10 md:grid-cols-12">
            <p className="label md:col-span-3">Disclaimer</p>
            <div className="md:col-span-9">
              <p className="max-w-[68ch] font-medium">
                Degree SpeedRun is an independent planning guide. It is not affiliated with WGU,
                Sophia Learning, Study.com, Saylor, or the College Board.
              </p>
              <p className="mt-3 max-w-[68ch] text-sm text-muted">
                Prices, transfer policies and course lists change. Always confirm against the
                official WGU transfer pathway for your program, and with an enrollment counselor,
                before paying for anything.
              </p>
              <p className="label mt-5">Figures verified July 2026</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
