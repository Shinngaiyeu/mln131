"use client"

import { useState, useEffect, useRef } from "react"
import { ref, push, serverTimestamp } from "firebase/database"
import { database } from "@/lib/firebase"
import GameStats from "@/components/game/game-stats"
import GameQuestion from "@/components/game/game-question"
import GameStart from "@/components/game/game-start"
import GameOver from "@/components/game/game-over"
import GameVictory from "@/components/game/game-victory"
import GameNameInput from "@/components/game/game-name-input"
import { questions } from "@/lib/game-data"

export type GameState = "name_input" | "start" | "playing" | "game_over" | "victory"

export interface Stats {
  economy: number
  society: number
  knowledge: number
}

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>("name_input")
  const [playerName, setPlayerName] = useState<string>("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [stats, setStats] = useState<Stats>({
    economy: 25,
    society: 25,
    knowledge: 25,
  })
  const [failedStat, setFailedStat] = useState<keyof Stats | null>(null)
  const [startTime, setStartTime] = useState<number>(0)
  const [elapsedTime, setElapsedTime] = useState<number>(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Timer effect
  useEffect(() => {
    if (gameState === "playing" && startTime > 0) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [gameState, startTime])

  const handleNameSubmit = (name: string) => {
    setPlayerName(name)
    setGameState("start")
  }

  const handleStartGame = () => {
    setGameState("playing")
    setCurrentQuestionIndex(0)
    setStats({ economy: 25, society: 25, knowledge: 25 })
    setFailedStat(null)
    setStartTime(Date.now())
    setElapsedTime(0)
  }

  const saveResultToFirebase = async (roundsCompleted: number, timeInSeconds: number, isVictory: boolean) => {
    try {
      const leaderboardRef = ref(database, "leaderboard")
      await push(leaderboardRef, {
        playerName,
        roundsCompleted,
        timeInSeconds,
        isVictory,
        timestamp: serverTimestamp(),
      })
    } catch (error) {
      console.error("Error saving result to Firebase:", error)
    }
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
      
      // Stop timer and save result
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      const finalTime = Math.floor((Date.now() - startTime) / 1000)
      setElapsedTime(finalTime)
      saveResultToFirebase(currentQuestionIndex + 1, finalTime, false)
      return
    }

    // Check win condition
    if (currentQuestionIndex >= questions.length - 1) {
      setGameState("victory")
      
      // Stop timer and save result
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
      const finalTime = Math.floor((Date.now() - startTime) / 1000)
      setElapsedTime(finalTime)
      saveResultToFirebase(questions.length, finalTime, true)
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
    setStartTime(Date.now())
    setElapsedTime(0)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <div className="w-full min-h-screen bg-background">
      {gameState === "name_input" && <GameNameInput onSubmit={handleNameSubmit} />}
      
      {gameState === "start" && <GameStart onStart={handleStartGame} playerName={playerName} />}

      {gameState === "playing" && (
        <div className="py-8">
          <GameStats stats={stats} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Timer and Player Info */}
            <div className="flex justify-between items-center mb-4 p-4 bg-card rounded-lg border border-border/30">
              <div className="flex items-center gap-2">
                <span className="text-foreground/60">Người chơi:</span>
                <span className="font-bold text-primary">{playerName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-foreground/60">Thời gian:</span>
                <span className="font-mono font-bold text-primary">{formatTime(elapsedTime)}</span>
              </div>
            </div>
            
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
          playerName={playerName}
          elapsedTime={elapsedTime}
        />
      )}

      {gameState === "victory" && (
        <GameVictory 
          stats={stats} 
          totalQuestions={questions.length} 
          onReset={handleReset}
          playerName={playerName}
          elapsedTime={elapsedTime}
        />
      )}
    </div>
  )
}
