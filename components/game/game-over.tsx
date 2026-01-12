"use client"

import type { Stats } from "@/app/game/page"

interface GameOverProps {
  failedStat: keyof Stats | null
  stats: Stats
  currentQuestion: number
  totalQuestions: number
  onReset: () => void
}

const statLabels = {
  economy: "Kinh Tế",
  society: "Xã Hội",
  knowledge: "Tri Thức",
}

export default function GameOver({ failedStat, stats, currentQuestion, totalQuestions, onReset }: GameOverProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/30 px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">💔</div>
          <h1 className="text-5xl font-bold text-foreground mb-2">Xã Hội Đã Sụp Đổ</h1>
          <p className="text-xl text-foreground/70">
            {failedStat && statLabels[failedStat]} của xã hội đã đổ xuống 0. Nền tảng xã hội không còn!
          </p>
        </div>

        <div className="bg-card border border-border/30 rounded-lg p-8 mb-8 space-y-6">
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4">
            <p className="text-lg font-bold text-red-400">Lý do thất bại: {failedStat && statLabels[failedStat]} = 0</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Thống Kê Cuối Cùng</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Câu hỏi hoàn thành:</span>
                <span className="text-primary font-bold">
                  {currentQuestion} / {totalQuestions}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Kinh Tế:</span>
                <span className={stats.economy === 0 ? "text-red-500 font-bold" : "font-bold"}>{stats.economy}/50</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Xã Hội:</span>
                <span className={stats.society === 0 ? "text-red-500 font-bold" : "font-bold"}>{stats.society}/50</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/30">
                <span className="font-semibold">Tri Thức:</span>
                <span className={stats.knowledge === 0 ? "text-red-500 font-bold" : "font-bold"}>
                  {stats.knowledge}/50
                </span>
              </div>
            </div>
          </div>

          <p className="text-foreground/70 italic">
            "Một xã hội không thể tồn tại khi một trong những trụ cột cơ bản của nó bị phá hủy."
          </p>
        </div>

        <button
          onClick={onReset}
          className="px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
        >
          Thử Lại
        </button>
      </div>
    </div>
  )
}
