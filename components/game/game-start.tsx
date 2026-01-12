"use client"

interface GameStartProps {
  onStart: () => void
  playerName: string
}

export default function GameStart({ onStart, playerName }: GameStartProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/30 px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">The Architect</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Socialist Dream</h2>
        <p className="text-xl text-foreground/70 mb-8">
          Xin chào, <span className="text-primary font-bold">{playerName}</span>!
        </p>

        <div className="bg-card border border-border/30 rounded-lg p-8 mb-8 text-left space-y-6">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Mục Tiêu Trò Chơi</h3>
            <p className="text-foreground/70 leading-relaxed">
              Bạn là lãnh đạo của một quốc gia mới. Hãy trả lời 30 câu hỏi chiến lược để xây dựng một xã hội xã hội chủ
              nghĩa. Mục tiêu là tồn tại sống sót qua tất cả 30 câu hỏi mà không để bất kỳ trong 3 tài nguyên chính nào
              rơi xuống dưới 0.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Ba Tài Nguyên Chính</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground">Kinh Tế</p>
                  <p className="text-sm text-foreground/60">GDP, cơ sở hạ tầng, thịnh vượng</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground">Xã Hội</p>
                  <p className="text-sm text-foreground/60">Sự tin tưởng, bình đẳng, trật tự</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                <div>
                  <p className="font-semibold text-foreground">Tri Thức</p>
                  <p className="text-sm text-foreground/60">Giáo dục, công nghệ, đổi mới</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">Cách Chơi</h3>
            <ol className="text-foreground/70 space-y-2 list-decimal list-inside">
              <li>Mỗi câu hỏi có 4 tùy chọn (A, B, C, D)</li>
              <li>Mỗi lựa chọn sẽ ảnh hưởng đến 3 tài nguyên của bạn</li>
              <li>Nếu bất kỳ tài nguyên nào rơi xuống dưới 0, bạn sẽ thua</li>
              <li>Trả lời đúng tất cả 30 câu hỏi để chiến thắng!</li>
            </ol>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onStart}
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
          >
            Bắt Đầu Trò Chơi
          </button>
          <a
            href="/leaderboard"
            className="px-8 py-4 bg-card border border-border/30 text-foreground font-bold text-lg rounded-lg hover:bg-card/80 transition-colors inline-block"
          >
            🏆 Bảng Xếp Hạng
          </a>
        </div>
      </div>
    </div>
  )
}
