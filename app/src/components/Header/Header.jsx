"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/#blog" },
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const handleHomeClick = (e, href) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      e.preventDefault();
    }
  };
  return (
    <header
      className="w-full h-[90px] flex items-center justify-between bg-transparent text-white border-b border-t border-white"
      style={{
        fontFamily: "Inter, sans-serif",
        zIndex: 1000,
        position: "fixed",
        top: 0,
        backdropFilter: "blur(50px)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        height: "90px",
      }}
    >
      <div className="h-full aspect-square flex items-center justify-center border-r border-white">
        <Image src="/vit-vellore.svg" alt="Logo" width={55} height={55} />
      </div>
      <nav className="flex flex-1 h-full">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex-1 h-full border-r border-white last:border-r-0 flex items-center justify-center hover:bg-white/10 transition-colors"
            style={{ fontSize: "28px" }}
            onClick={
              label === "Home" ? (e) => handleHomeClick(e, href) : undefined
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
