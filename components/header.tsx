"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Trang Chủ" },
    { href: "/page1", label: "Lý Luận" },
    { href: "/page2", label: "Sự Thịnh Vượng" },
    { href: "/page3", label: "Đặc Trưng CNXH" },
    { href: "/page4", label: "Thời Kỳ Quá Độ" },
    { href: "/page5", label: "Ý Nghĩa Thực Tiễn" },
    { href: "/page7", label: "Tổng Kết" },
    { href: "/gallery", label: "Thư Viện" },
    { href: "/game", label: "Trò Chơi" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <div className="text-2xl font-bold text-primary">CNXH</div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <details className="relative">
              <summary className="cursor-pointer text-primary list-none text-xl">☰</summary>
              <nav className="absolute right-0 top-full mt-2 bg-card border border-border/30 rounded-lg shadow-lg min-w-48">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
        </div>
      </div>
    </header>
  )
}
