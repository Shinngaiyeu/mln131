export default function Page2() {
  return (
    <div className="w-full">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
              Trang 2
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">Giải Mã Sự Giàu Có Của Chủ Nghĩa Tư Bản</h1>
            <p className="text-xl text-foreground/60">Vì sao tính tất yếu vẫn tồn tại?</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-foreground/80">
            <div className="w-full rounded-lg overflow-hidden mb-8">
              <img
                src="/capitalism-wealth-industrial-economy-modern-busine.jpg"
                alt="Sự thịnh vượng của chủ nghĩa tư bản"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                2.1. Bản Chất Của Sự Thịnh Vượng Tư Bản Chủ Nghĩa
              </h2>
              <p className="leading-relaxed">
                Dù chủ nghĩa tư bản ngày nay có những điều chỉnh về quản lý, phúc lợi xã hội hay áp dụng công nghệ cao
                (Cách mạng công nghiệp 4.0), nhưng bản chất bóc lột vẫn không thay đổi. Sự giàu có của các nước tư bản
                vẫn dựa trên việc chiếm đoạt giá trị thặng dư do công nhân làm ra.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-card border border-border/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Giá Trị Thặng Dư</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Sự giàu có của các nước tư bản vẫn dựa trên việc chiếm đoạt giá trị thặng dư do công nhân làm ra.
                  Khoảng cách giàu nghèo ngày càng mở rộng, cho thấy mâu thuẫn vẫn tồn tại.
                </p>
              </div>

              <div className="bg-card border border-border/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Mâu Thuẫn Giai Cấp Ẩn Mình</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Dưới vẻ ngoài giàu có là mâu thuẫn sâu sắc giữa giai cấp tư sản và giai cấp công nhân. Chủ nghĩa tư
                  bản không thể giải quyết triệt để các cuộc khủng hoảng kinh tế chu kỳ.
                </p>
              </div>
            </div>

            <div className="w-full rounded-lg overflow-hidden my-8">
              <img
                src="/class-struggle-workers-poverty-inequality-capitali.jpg"
                alt="Mâu thuẫn giai cấp trong chủ nghĩa tư bản"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                2.2. Sự Giàu Có Không Xóa Bỏ Được Quy Luật Khách Quan
              </h2>

              <p className="leading-relaxed mb-6">
                Chủ nghĩa tư bản có thể tự điều chỉnh để tồn tại thêm một thời gian, nhưng nó không thể tự xóa bỏ mâu
                thuẫn cơ bản của chính mình. Tính tất yếu của chủ nghĩa xã hội nằm ở chỗ:
              </p>

              <div className="space-y-4">
                <div className="bg-card/50 border-l-4 border-primary pl-6 py-4 rounded">
                  <h4 className="font-bold text-foreground mb-2">Nhu Cầu Xã Hội Hóa</h4>
                  <p className="text-foreground/70">
                    Lực lượng sản xuất càng phát triển, tính xã hội hóa càng cao, càng đòi hỏi sự quản lý và sở hữu
                    chung của toàn xã hội.
                  </p>
                </div>

                <div className="bg-card/50 border-l-4 border-primary pl-6 py-4 rounded">
                  <h4 className="font-bold text-foreground mb-2">Giới Hạn Của Tư Hữu</h4>
                  <p className="text-foreground/70">
                    Chế độ tư hữu tư bản chủ nghĩa cuối cùng sẽ trở thành "xiềng xích" cản trở sự phát triển của loài
                    người vì mục tiêu lợi nhuận hẹp hòi thay vì lợi ích chung của cộng đồng.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5">
              <p className="text-lg text-foreground font-semibold mb-2">Nhận Xét</p>
              <p className="text-foreground/70">
                Sự thịnh vượng hiện tại của chủ nghĩa tư bản không phải là bằng chứng cho sự vĩnh viễn của nó, mà chỉ là
                một giai đoạn trong quá trình phát triển lịch sử được xác định bởi quy luật khách quan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
