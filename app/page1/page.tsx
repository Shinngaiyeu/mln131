export default function Page1() {
  return (
    <div className="w-full">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Trang 1
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Lý Luận Về Sự Ra Đời Của Chủ Nghĩa Xã Hội</h1>
            <p className="text-xl text-foreground/60">Từ viễn tưởng đến khoa học</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <div className="w-full rounded-lg overflow-hidden mb-8">
              <img
                src="/karl-marx-founding-theory-socialist-philosophy.jpg"
                alt="Chủ nghĩa xã hội - Lý luận sáng lập"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">1.1. Quan Điểm Của Các Nhà Sáng Lập</h2>
              <p className="leading-relaxed">
                Các nhà sáng lập Karl Marx và Friedrich Engels đã chỉ rõ sự thay thế của các hình thái kinh tế - xã hội
                là một quá trình lịch sử - tự nhiên. Sự thay thế này được thực hiện thông qua các cuộc cách mạng xã hội
                bắt nguồn từ sự phát triển của lực lượng sản xuất và sự thay đổi tương ứng của quan hệ sản xuất.
              </p>
            </section>

            <div className="bg-card border border-border/30 rounded-lg p-8 my-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Học Thuyết Hình Thái Kinh Tế - Xã Hội</h3>
              <ul className="space-y-4 text-foreground/70">
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>
                    Các hình thái kinh tế - xã hội được xác định bởi trình độ phát triển của lực lượng sản xuất
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Sự thay thế hình thái này không phải là ngẫu nhiên mà là một quy luật khách quan</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span>Mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất là động lực thay đổi</span>
                </li>
              </ul>
            </div>

            <div className="w-full rounded-lg overflow-hidden my-8">
              <img
                src="/economic-system-evolution-capitalism-socialism.jpg"
                alt="Sự tiến hóa của các hình thái kinh tế"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">Mâu Thuẫn Cơ Bản Của Chủ Nghĩa Tư Bản</h2>
              <p className="leading-relaxed mb-4">
                Marx đã đi sâu phân tích và phát hiện ra mâu thuẫn nan giải của chủ nghĩa tư bản: Mâu thuẫn giữa lực
                lượng sản xuất ngày càng có tính xã hội hóa cao với quan hệ sản xuất dựa trên chế độ chiếm hữu tư nhân
                tư bản chủ nghĩa về tư liệu sản xuất.
              </p>
              <p className="leading-relaxed text-foreground/60">
                Khi lực lượng sản xuất phát triển cao nhưng những người sản xuất (công nhân) không sở hữu công cụ sản
                xuất, đây là mâu thuẫn cơ bản của hệ thống này.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                1.2. Tính Tất Yếu Thay Thế Của Chủ Nghĩa Xã Hội
              </h2>

              <div className="bg-card/50 border border-border/30 rounded-lg p-8 my-6">
                <h4 className="text-xl font-bold text-primary mb-4">Sự Lớn Mạnh Của Giai Cấp Công Nhân</h4>
                <p className="text-foreground/70 leading-relaxed">
                  Sự phát triển của đại công nghiệp không chỉ tạo ra của cải mà còn tạo ra "người đào huyệt" chôn cất
                  chính nó: Giai cấp công nhân hiện đại. Đây là lực lượng xã hội mới sẽ trở thành chủ thể thực hiện cách
                  mạng xã hội.
                </p>
              </div>

              <h4 className="text-xl font-bold text-foreground mb-4">Quy Luật Kinh Tế</h4>
              <p className="leading-relaxed">
                Khi mâu thuẫn giữa tính xã hội hóa của lực lượng sản xuất và chế độ tư hữu trở nên gay gắt, nó đòi hỏi
                một quan hệ sản xuất mới dựa trên sở hữu xã hội về tư liệu sản xuất để giải phóng năng lực sản xuất. Đây
                là tiền đề kinh tế dẫn đến sự sụp đổ của chủ nghĩa tư bản và sự ra đời của chủ nghĩa xã hội.
              </p>
            </section>

            <div className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5">
              <p className="text-lg text-foreground font-semibold mb-2">Kết Luận</p>
              <p className="text-foreground/70">
                Chủ nghĩa xã hội không phải là viễn tưởng mơ hồ mà là một tất yếu lịch sử dựa trên sự phát triển khách
                quan của các lực lượng sản xuất và mâu thuẫn nội tại của chế độ hiện tại.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
