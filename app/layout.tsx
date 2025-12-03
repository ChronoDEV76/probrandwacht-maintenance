import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProSafetyMatch – Under Construction",
  description: "We bouwen aan een nieuwe ProSafetyMatch omgeving.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
