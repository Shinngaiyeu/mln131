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

        // Sort: By rounds completed (desc), then by time (asc - faster is better)
        entries.sort((a, b) => {
          // Sort by rounds completed (more is better)
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

  // Get top 3 and rest
  const top3 = leaderboard.slice(0, 3)
  const restOfLeaderboard = leaderboard.slice(3)

  // Reorder for podium display: [2nd, 1st, 3rd]
  const podiumOrder = top3.length >= 3 
    ? [top3[1], top3[0], top3[2]] 
    : top3.length === 2 
    ? [top3[1], top3[0], null] 
    : top3.length === 1 
    ? [null, top3[0], null] 
    : []

  const podiumHeights = ["h-28", "h-40", "h-20"] // 2nd, 1st, 3rd
  const podiumColors = [
    "from-gray-400 to-gray-500", // 2nd - Silver
    "from-yellow-400 to-yellow-600", // 1st - Gold
    "from-amber-600 to-amber-800", // 3rd - Bronze
  ]
  const podiumLabels = ["🥈", "🥇", "🥉"]

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">🏆 Bảng Xếp Hạng</h1>
          <p className="text-xl text-foreground/70">Những người chơi xuất sắc nhất</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
            <p className="mt-4 text-foreground/70">Đang tải dữ liệu...</p>
          </div>
        ) : leaderboard.length === 0 ? (
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
          <>
            {/* Podium Section - Top 3 */}
            {top3.length > 0 && (
              <div className="mb-12">
                <div className="flex justify-center items-end gap-4 px-4">
                  {podiumOrder.map((entry, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {entry ? (
                        <>
                          {/* Player Info Card */}
                          <div className="bg-card border border-border/30 rounded-lg p-4 mb-3 text-center min-w-[140px] max-w-[180px]">
                            <div className="text-3xl mb-2">{podiumLabels[index]}</div>
                            <p className="font-bold text-foreground truncate text-lg">{entry.playerName}</p>
                            <p className="text-primary font-mono text-sm">{entry.roundsCompleted}/30 vòng</p>
                            <p className="text-foreground/60 font-mono text-xs">{formatTime(entry.timeInSeconds)}</p>
                          </div>
                          {/* Podium Block */}
                          <div 
                            className={`${podiumHeights[index]} w-32 sm:w-40 bg-gradient-to-t ${podiumColors[index]} rounded-t-lg flex items-center justify-center shadow-lg`}
                          >
                            <span className="text-white font-bold text-2xl">
                              {index === 0 ? "2" : index === 1 ? "1" : "3"}
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Empty placeholder */}
                          <div className="bg-card/50 border border-border/20 rounded-lg p-4 mb-3 text-center min-w-[140px] max-w-[180px] opacity-50">
                            <div className="text-3xl mb-2">{podiumLabels[index]}</div>
                            <p className="font-bold text-foreground/50">---</p>
                            <p className="text-foreground/30 text-sm">Chưa có</p>
                          </div>
                          <div 
                            className={`${podiumHeights[index]} w-32 sm:w-40 bg-gradient-to-t from-gray-600/50 to-gray-700/50 rounded-t-lg flex items-center justify-center opacity-50`}
                          >
                            <span className="text-white/50 font-bold text-2xl">
                              {index === 0 ? "2" : index === 1 ? "1" : "3"}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
                {/* Podium Base */}
                <div className="flex justify-center">
                  <div className="h-2 w-full max-w-[520px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-b-lg"></div>
                </div>
              </div>
            )}

            {/* Table for rank 4 and below */}
            {restOfLeaderboard.length > 0 && (
              <div className="bg-card rounded-lg border border-border/30 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border/30 bg-background/50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Hạng</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Người Chơi</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Vòng</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">Thời Gian</th>
                    </tr>
                  </thead>
                  <tbody>
                    {restOfLeaderboard.map((entry, index) => (
                      <tr
                        key={entry.id}
                        className="border-b border-border/20 hover:bg-background/30 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <span className="text-foreground/70 font-semibold">#{index + 4}</span>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
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
