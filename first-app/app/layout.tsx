import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Praava Legal — Legal Work Platform",
  description:
    "A single platform to manage every part of your legal work. Track matters, coordinate schedules, manage clients, centralize documents, and handle communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f6f7fb] dark:bg-[#0c0f1a]">
        {children}
      </body>
    </html>
  );
}
