"use client"

import { useState, useEffect } from "react"
import { ref, onValue, query, orderByChild, limitToLast } from "firebase/database"
import { database } from "@/lib/firebase"
import Link from "next/link"

interface LeaderboardEntry {
  id: string
  playerName: string
  roundsCompleted: number
  timeInSeconds: number
  isVictory: boolean
  timestamp: number
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<"all" | "victory" | "failed">("all")

  useEffect(() => {
    const leaderboardRef = ref(database, "leaderboard")
    const leaderboardQuery = query(leaderboardRef, orderByChild("timestamp"), limitToLast(100))

    const unsubscribe = onValue(leaderboardQuery, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const entries: LeaderboardEntry[] = Object.entries(data).map(([id, value]) => ({
          id,
          ...(value as Omit<LeaderboardEntry, "id">),
        }))

        // Sort: Victory first (by time), then by rounds completed (desc), then by time (asc)
        entries.sort((a, b) => {
          // Victory players first
          if (a.isVictory && !b.isVictory) return -1
          if (!a.isVictory && b.isVictory) return 1

          // Both victory - sort by time (faster is better)
          if (a.isVictory && b.isVictory) {
            return a.timeInSeconds - b.timeInSeconds
          }

          // Both failed - sort by rounds completed (more is better)
          if (a.roundsCompleted !== b.roundsCompleted) {
            return b.roundsCompleted - a.roundsCompleted
          }

          // Same rounds - sort by time (faster is better)
          return a.timeInSeconds - b.timeInSeconds
        })

        setLeaderboard(entries)
      } else {
        setLeaderboard([])
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const filteredLeaderboard = leaderboard.filter((entry) => {
    if (filter === "victory") return entry.isVictory
    if (filter === "failed") return !entry.isVictory
    return true
  })

  const getRankIcon = (index: number) => {
    if (index === 0) return "🥇"
    if (index === 1) return "🥈"
    if (index === 2) return "🥉"
    return `#${index + 1}`
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">🏆 Bảng Xếp Hạng</h1>
          <p className="text-xl text-foreground/70">Những người chơi xuất sắc nhất</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border/30 text-foreground hover:bg-card/80"
            }`}
          >
            Tất Cả
          </button>
          <button
            onClick={() => setFilter("victory")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === "victory"
                ? "bg-emerald-600 text-white"
                : "bg-card border border-border/30 text-foreground hover:bg-card/80"
            }`}
          >
            🎉 Chiến Thắng
          </button>
          <button
            onClick={() => setFilter("failed")}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === "failed"
                ? "bg-red-600 text-white"
                : "bg-card border border-border/30 text-foreground hover:bg-card/80"
            }`}
          >
            💔 Thất Bại
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-foreground/70">Đang tải dữ liệu...</p>
          </div>
        ) : filteredLeaderboard.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-lg border border-border/30">
            <p className="text-xl text-foreground/70">Chưa có kết quả nào</p>
            <p className="text-foreground/50 mt-2">Hãy là người đầu tiên chơi game!</p>
            <Link
              href="/game"
              className="inline-block mt-6 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Chơi Ngay
            </Link>
          </div>
        ) : (
          <div className="bg-card rounded-lg border border-border/30 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30 bg-background/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Hạng</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Người Chơi</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Vòng</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Thời Gian</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Kết Quả</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeaderboard.map((entry, index) => (
                  <tr
                    key={entry.id}
                    className={`border-b border-border/20 hover:bg-background/30 transition-colors ${
                      index < 3 ? "bg-primary/5" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className={`text-lg ${index < 3 ? "text-2xl" : "text-foreground/70"}`}>
                        {getRankIcon(index)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-foreground">{entry.playerName}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-mono text-primary">{entry.roundsCompleted}/30</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="font-mono text-foreground/70">{formatTime(entry.timeInSeconds)}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {entry.isVictory ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          🎉 Thắng
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                          💔 Thua
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="text-center mt-8">
          <Link
            href="/game"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
          >
            Chơi Game
          </Link>
        </div>
      </div>
    </div>
  )
}
