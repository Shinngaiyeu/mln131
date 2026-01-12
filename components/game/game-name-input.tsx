"use client"

import { useState, useEffect } from "react"

interface GameNameInputProps {
  onSubmit: (name: string) => void
}

export default function GameNameInput({ onSubmit }: GameNameInputProps) {
  const [name, setName] = useState("")
  const [savedName, setSavedName] = useState<string | null>(null)

  useEffect(() => {
    const storedName = localStorage.getItem("playerName")
    if (storedName) {
      setSavedName(storedName)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      localStorage.setItem("playerName", name.trim())
      onSubmit(name.trim())
    }
  }

  const handleUseSavedName = () => {
    if (savedName) {
      onSubmit(savedName)
    }
  }

  const handleChangePlayer = () => {
    setSavedName(null)
    localStorage.removeItem("playerName")
  }

  if (savedName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/30 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Chào mừng trở lại!</h1>
          <p className="text-xl text-foreground/70 mb-8">
            Xin chào, <span className="text-primary font-bold">{savedName}</span>
          </p>

          <div className="space-y-4">
            <button
              onClick={handleUseSavedName}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity"
            >
              Tiếp Tục Với Tên Này
            </button>
            
            <button
              onClick={handleChangePlayer}
              className="w-full px-8 py-4 bg-card border border-border/30 text-foreground font-medium rounded-lg hover:bg-card/80 transition-colors"
            >
              Đổi Người Chơi
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-card/30 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Nhập Tên Của Bạn</h1>
        <p className="text-foreground/70 mb-8">
          Hãy cho chúng tôi biết tên của bạn để lưu kết quả và xem bảng xếp hạng
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của bạn..."
              maxLength={20}
              className="w-full px-6 py-4 bg-card border border-border/30 rounded-lg text-foreground text-lg placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <p className="text-sm text-foreground/50 mt-2">{name.length}/20 ký tự</p>
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Tiếp Tục
          </button>
        </form>
      </div>
    </div>
  )
}
