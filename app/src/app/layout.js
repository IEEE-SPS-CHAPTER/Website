import "./globals.css";
// import Header from "../components/Header/Header";

export const metadata = {
  title: "IEEE-SPS VIT",
  description: "IEEE Signal Processing Society VIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
