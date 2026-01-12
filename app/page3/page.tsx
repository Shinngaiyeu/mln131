export default function Page3() {
  return (
    <div className="w-full">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Trang 3
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Đặc Trưng Bản Chất Của Chủ Nghĩa Xã Hội</h1>
            <p className="text-xl text-foreground/60">Sự khác biệt với "Lý tưởng mơ hồ"</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <div className="w-full rounded-lg overflow-hidden mb-8">
              <img
                src="/socialist-society-characteristics-equality-workers.jpg"
                alt="Đặc trưng chủ nghĩa xã hội"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">3.1. CNXH Là Kết Quả Của Khoa Học</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                  <h3 className="font-bold text-primary mb-3">CNXH Lý Tưởng Mơ Hồ</h3>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li>• Dựa trên những mong muốn tốt đẹp</li>
                    <li>• Đạo đức thuần túy nhưng vô căn cứ</li>
                    <li>• Không tìm ra con đường thực hiện</li>
                    <li>• Tập trung vào nhu cầu tinh thần</li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                  <h3 className="font-bold text-primary mb-3">CNXH Khoa Học</h3>
                  <ul className="space-y-2 text-foreground/70 text-sm">
                    <li>• Dựa trên phân tích thực tiễn kinh tế</li>
                    <li>• Phát hiện quy luật thặng dư</li>
                    <li>• Tìm ra con đường thực hiện cụ thể</li>
                    <li>• Dựa trên nền tảng khoa học thực nghiệm</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">3.2. Sáu Đặc Trưng Bản Chất Của CNXH</h2>

              <div className="w-full rounded-lg overflow-hidden my-8">
                <img
                  src="/socialist-society-features-human-development-scien.jpg"
                  alt="Sáu đặc trưng bản chất của chủ nghĩa xã hội"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div className="space-y-6 my-8">
                {[
                  {
                    num: "01",
                    title: "Giải Phóng Giai Cấp, Dân Tộc, Con Người",
                    desc: "Tạo điều kiện để con người phát triển toàn diện, giải phóng nhân loại khỏi sự áp bức và bóc lột.",
                  },
                  {
                    num: "02",
                    title: "Lực Lượng Sản Xuất Phát Triển Cao",
                    desc: "Dựa trên trình độ khoa học kỹ thuật hiện đại và chế độ công hữu về tư liệu sản xuất.",
                  },
                  {
                    num: "03",
                    title: "Nhân Dân Lao Động Làm Chủ",
                    desc: "Thiết lập một nền dân chủ thực sự, loại bỏ sự áp bức của các giai cấp khai thác.",
                  },
                  {
                    num: "04",
                    title: "Nhà Nước Kiểu Mới",
                    desc: "Nhà nước mang bản chất giai cấp công nhân, đại diện cho lợi ích của đại đa số.",
                  },
                  {
                    num: "05",
                    title: "Nền Văn Hóa Phát Triển Cao",
                    desc: "Kế thừa những giá trị tinh hoa của nhân loại, phát triển văn hóa dân chủ, khoa học.",
                  },
                  {
                    num: "06",
                    title: "Giải Quyết Vấn Đề Dân Tộc",
                    desc: "Đảm bảo bình đẳng, đoàn kết giữa các dân tộc, tôn giáo.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border/30 rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex gap-4">
                      <div className="text-4xl font-bold text-primary/50 flex-shrink-0">{item.num}</div>
                      <div>
                        <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-foreground/70">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5">
              <p className="text-lg text-foreground font-semibold mb-2">Điểm Chính</p>
              <p className="text-foreground/70">
                Những đặc trưng này cho thấy rằng chủ nghĩa xã hội không phải là sự "bình đẳng tuyệt đối" mơ hồ, mà là
                một hệ thống có những đặc điểm cụ thể, khoa học, lấy con người làm trung tâm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
