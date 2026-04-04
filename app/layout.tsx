import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bell-Towne Technologies, LLC",
  description: "Software, platforms, and systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
