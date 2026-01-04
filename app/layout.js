import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "InHue – Track Your Year in Color",
  description: "A gentler way to stay connected. Share your mood without saying a word.",
  icons: {
    icon: "/inhue-icon.webp",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "InHue – Track Your Year in Color",
    description: "A gentler way to stay connected. Share your mood without saying a word.",
    url: "https://inhue.io",
    siteName: "InHue",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InHue – Track Your Year in Color",
    description: "A gentler way to stay connected. Share your mood without saying a word.",
  },
  metadataBase: new URL("https://inhue.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}
