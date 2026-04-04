import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://belltownetech.com";

const ogImageAlt =
  "Bell-Towne Technologies — Software, platforms, and systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bell-Towne Technologies, LLC",
  description: "Software, platforms, and systems.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bell-Towne Technologies, LLC",
    description: "Software, platforms, and systems.",
    url: "/",
    siteName: "Bell-Towne Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: ogImageAlt,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bell-Towne Technologies, LLC",
    description: "Software, platforms, and systems.",
    images: ["/og.png"],
  },
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
