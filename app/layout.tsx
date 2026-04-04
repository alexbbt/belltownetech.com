import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bell-Towne Technologies, LLC",
  description: "Software, platforms, and systems.",
  icons: {
    icon: [
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/favicon-dark.svg", type: "image/svg+xml" },
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
      <body>{children}</body>
    </html>
  );
}
