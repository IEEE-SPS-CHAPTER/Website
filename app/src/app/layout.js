import "./globals.css";
import Header from "../components/Header/Header";
import { icons } from "lucide-react";

export const metadata = {
  title: "IEEE-SPS VIT",
  description: "IEEE Signal Processing Society VIT",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "IEEE-SPS VIT",
    description: "IEEE Signal Processing Society VIT",
  },
  twitter: {
    title: "IEEE-SPS VIT",
    description: "IEEE Signal Processing Society VIT",
    image: "/icon.svg",
    card: "summary_small_image",
  },
  keywords: ["IEEE", "Signal Processing", "Society", "VIT"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
