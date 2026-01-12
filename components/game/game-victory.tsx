"use client"

import type { Stats } from "@/app/game/page"

interface GameVictoryProps {
  stats: Stats
  totalQuestions: number
  onReset: () => void
  playerName: string
  elapsedTime: number
}

export default function GameVictory({ stats, totalQuestions, onReset, playerName, elapsedTime }: GameVictoryProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/30 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-5xl font-bold text-primary mb-2">Chiến Thắng!</h1>
          <p className="text-xl text-foreground/70">
            Chúc mừng <span className="text-primary font-bold">{playerName}</span>!
          </p>
          <p className="text-lg text-foreground/70">Bạn đã xây dựng thành công một xã hội xã hội chủ nghĩa!</p>
        </div>

        <div className="bg-card border border-border/30 rounded-lg p-8 mb-8 space-y-6">
          <div className="bg-primary/20 border border-primary/50 rounded-lg p-4">
            <p className="text-lg font-bold text-primary">Bạn đã hoàn thành tất cả {totalQuestions} câu hỏi!</p>
            <p className="text-foreground/70 mt-2">
              Thời gian hoàn thành: <span className="font-mono font-bold text-primary">{formatTime(elapsedTime)}</span>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Thành Quả Cuối Cùng</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Kinh Tế:</span>
                <span className="text-emerald-500 font-bold">{stats.economy}/100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Xã Hội:</span>
                <span className="text-blue-500 font-bold">{stats.society}/100</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Tri Thức:</span>
                <span className="text-purple-500 font-bold">{stats.knowledge}/100</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border/30">
            <p className="text-foreground/70 italic">
              "Qua những quyết định khôn ngoan, bạn đã chứng minh rằng một xã hội cân bằng giữa kinh tế, xã hội và tri
              thức là hoàn toàn khả thi."
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onReset}
            className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
          >
            Chơi Lại
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
