import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
];

export default function Header() {
  return (
    <header
      className="w-full h-[90px] flex items-center justify-between bg-transparent text-white border-b border-t border-white"
      style={{
        fontFamily: "Inter, sans-serif",
        zIndex: 1000,
        position: "fixed",
        top: 0,
        backdropFilter: "blur(50px)",
        backgroundColor: "rgba(0, 0, 0, 0.14)",
      }}
    >
      <div className="h-full aspect-square flex items-center justify-center border-r border-white">
        <Image src="/vit-vellore.svg" alt="Logo" width={40} height={40} />
      </div>
      <nav className="flex flex-1 h-full">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex-1 h-full border-r border-white last:border-r-0 flex items-center justify-center hover:bg-white/10 transition-colors"
            style={{ fontSize: "28px" }}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
