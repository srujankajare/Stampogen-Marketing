import { Oswald, Inter, IBM_Plex_Mono, Kalam } from "next/font/google";
import "./globals.css";

const display = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const hand = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-hand",
});

export const metadata = {
  title: "Stampogen — Every visit earns a stamp",
  description:
    "A QR loyalty card for local shops. Scan, collect loyalty points, redeem a reward — no app, no plastic card, no losing your place.",
  icons: {
    icon: "/icon with blue no bg.png",
    shortcut: "/icon with blue no bg.png",
    apple: "/icon with blue no bg.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${hand.variable}`}>
      <body className="bg-paper text-charcoal font-body antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
