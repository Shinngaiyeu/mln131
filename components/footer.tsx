import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">CNXH</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Khám phá lý luận khoa học về chủ nghĩa xã hội như một tất yếu lịch sử dựa trên nền tảng kinh tế - xã hội
              khách quan.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Nội Dung Chính</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/page1" className="hover:text-primary transition-colors">
                  Lý Luận Sáng Lập
                </Link>
              </li>
              <li>
                <Link href="/page2" className="hover:text-primary transition-colors">
                  Sự Thịnh Vượng CNTB
                </Link>
              </li>
              <li>
                <Link href="/page3" className="hover:text-primary transition-colors">
                  Đặc Trưng CNXH
                </Link>
              </li>
              <li>
                <Link href="/page4" className="hover:text-primary transition-colors">
                  Thời Kỳ Quá Độ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Thêm Nội Dung</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="/page5" className="hover:text-primary transition-colors">
                  Ý Nghĩa Thực Tiễn
                </Link>
              </li>
              <li>
                <Link href="/page7" className="hover:text-primary transition-colors">
                  Tổng Kết
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8">
          <p className="text-center text-sm text-foreground/50">
            © 2026 Chủ Nghĩa Xã Hội: Tất Yếu Lịch Sử. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
