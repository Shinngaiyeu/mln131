export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-card/30">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-screen blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full mix-blend-screen blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Chủ Nghĩa Xã Hội:
            <br />
            <span className="text-primary">Tất Yếu Lịch Sử</span>
          </h1>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Viễn tưởng mơ hồ hay Quy luật vận động của nhân loại?
          </p>

          <p className="text-base sm:text-lg text-foreground/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            Trong thế kỷ XXI, khi các cường quốc tư bản vẫn thể hiện sự thịnh vượng về vật chất, nhiều câu hỏi được đặt
            ra. Website này sẽ cùng bạn bóc tách những quy luật kinh tế - xã hội khách quan để thấy rằng chủ nghĩa xã
            hội không phải là ý muốn chủ quan của bất kỳ ai, mà là một tất yếu lịch sử dựa trên nền tảng khoa học thực
            nghiệm.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/page1"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Khám Phá Lý Luận
            </a>
            <a
              href="/page7"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors"
            >
              Xem Tổng Kết
            </a>
          </div>
        </div>
      </section>

      {/* Key Topics Preview */}
      <section className="py-20 bg-background border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Các Chủ Đề Chính</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Lý Luận Sáng Lập",
                desc: "Từ viễn tưởng đến khoa học",
              },
              {
                num: "02",
                title: "Sự Thịnh Vượng",
                desc: "Tại sao CNTB vẫn giàu?",
              },
              {
                num: "03",
                title: "Đặc Trưng CNXH",
                desc: "Sáu đặc trưng bản chất",
              },
              {
                num: "04",
                title: "Thời Kỳ Quá Độ",
                desc: "Con đường hiện thực hóa",
              },
              {
                num: "05",
                title: "Ý Nghĩa Thực Tiễn",
                desc: "Đối với Việt Nam hiện nay",
              },
              {
                num: "06",
                title: "Tổng Kết",
                desc: "Tương lai tất yếu",
              },
            ].map((topic, idx) => (
              <div key={idx} className="group">
                <a
                  href={`/page${idx === 5 ? 7 : idx + 1}`}
                  className="block p-6 rounded-lg bg-card border border-border/30 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="text-4xl font-bold text-primary/50 group-hover:text-primary transition-colors mb-2">
                    {topic.num}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                  <p className="text-sm text-foreground/60">{topic.desc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card/50 border-t border-border/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">Câu Hỏi Thường Gặp</h2>

          <div className="space-y-6">
            {[
              {
                q: "Tại sao phương Tây vẫn giàu mà họ không theo CNXH?",
                a: "CNTB đang dùng sự giàu có để xoa dịu mâu thuẫn, nhưng quy luật thặng dư và sự phân hóa giàu nghèo cực đoan vẫn đang tích tụ mâu thuẫn cho một sự thay đổi tất yếu.",
              },
              {
                q: "Việt Nam bỏ qua CNTB có vội vàng không?",
                a: "Không, vì Việt Nam bỏ qua sự thống trị của tư hữu nhưng vẫn kế thừa tinh hoa quản lý và công nghệ của nhân loại.",
              },
            ].map((faq, idx) => (
              <details key={idx} className="group p-6 rounded-lg bg-background border border-border/30 cursor-pointer">
                <summary className="font-semibold text-foreground group-open:text-primary transition-colors">
                  {faq.q}
                </summary>
                <p className="mt-4 text-foreground/70 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
