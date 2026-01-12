"use client"

import { useState } from "react"
import GameStats from "@/components/game/game-stats"
import GameQuestion from "@/components/game/game-question"
import GameStart from "@/components/game/game-start"
import GameOver from "@/components/game/game-over"
import GameVictory from "@/components/game/game-victory"
import { questions } from "@/lib/game-data"

export type GameState = "start" | "playing" | "game_over" | "victory"

export interface Stats {
  economy: number
  society: number
  knowledge: number
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>("start")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [stats, setStats] = useState<Stats>({
    economy: 25,
    society: 25,
    knowledge: 25,
  })
  const [failedStat, setFailedStat] = useState<keyof Stats | null>(null)

  const handleStartGame = () => {
    setGameState("playing")
    setCurrentQuestionIndex(0)
    setStats({ economy: 25, society: 25, knowledge: 25 })
    setFailedStat(null)
  }

  const handleAnswer = (optionId: string) => {
    const currentQuestion = questions[currentQuestionIndex]
    const selectedOption = currentQuestion.options.find((opt) => opt.id === optionId)

    if (!selectedOption) return

    // Calculate new stats
    const newStats: Stats = {
      economy: Math.min(50, Math.max(0, stats.economy + selectedOption.effect.economy)),
      society: Math.min(50, Math.max(0, stats.society + selectedOption.effect.society)),
      knowledge: Math.min(50, Math.max(0, stats.knowledge + selectedOption.effect.knowledge)),
    }

    setStats(newStats)

    // Check loss condition
    if (newStats.economy === 0 || newStats.society === 0 || newStats.knowledge === 0) {
      const failed = (
        newStats.economy === 0 ? "economy" : newStats.society === 0 ? "society" : "knowledge"
      ) as keyof Stats
      setFailedStat(failed)
      setGameState("game_over")
      return
    }

    // Check win condition
    if (currentQuestionIndex >= questions.length - 1) {
      setGameState("victory")
      return
    }

    // Next question
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleReset = () => {
    setGameState("playing")
    setCurrentQuestionIndex(0)
    setStats({ economy: 25, society: 25, knowledge: 25 })
    setFailedStat(null)
  }

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="w-full min-h-screen bg-background">
      {gameState === "start" && <GameStart onStart={handleStartGame} />}

      {gameState === "playing" && (
        <div className="py-8">
          <GameStats stats={stats} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-foreground">
                  Câu {currentQuestionIndex + 1} / {questions.length}
                </h2>
                <span className="text-sm text-foreground/60">{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-border/30">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {currentQuestionIndex < questions.length && (
              <GameQuestion question={questions[currentQuestionIndex]} onAnswer={handleAnswer} disabled={false} />
            )}
          </div>
        </div>
      )}

      {gameState === "game_over" && (
        <GameOver
          failedStat={failedStat}
          stats={stats}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onReset={handleReset}
        />
      )}

      {gameState === "victory" && <GameVictory stats={stats} totalQuestions={questions.length} onReset={handleReset} />}
    </div>
  )
}
