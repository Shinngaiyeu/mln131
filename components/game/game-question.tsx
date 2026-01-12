"use client"

interface Option {
  id: string
  text: string
  effect: {
    economy: number
    society: number
    knowledge: number
  }
  explanation: string
}

interface Question {
  id: number
  scenario: string
  options: Option[]
}

interface GameQuestionProps {
  question: Question
  onAnswer: (optionId: string) => void
  disabled: boolean
}

const formatEffect = (effect: { economy: number; society: number; knowledge: number }) => {
  const parts = []
  if (effect.economy !== 0) {
    parts.push(`${effect.economy > 0 ? "+" : ""}${effect.economy} Kinh Tế`)
  }
  if (effect.society !== 0) {
    parts.push(`${effect.society > 0 ? "+" : ""}${effect.society} Xã Hội`)
  }
  if (effect.knowledge !== 0) {
    parts.push(`${effect.knowledge > 0 ? "+" : ""}${effect.knowledge} Tri Thức`)
  }
  return parts.length > 0 ? parts.join(" | ") : "Không thay đổi"
}

export default function GameQuestion({ question, onAnswer, disabled }: GameQuestionProps) {
  return (
    <div className="space-y-6 py-8">
      <div className="bg-card border border-border/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">{question.scenario}</h2>
        <p className="text-foreground/60">Hãy chọn một trong bốn phương án dưới đây</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            disabled={disabled}
            className="text-left p-6 rounded-lg border border-border/30 bg-background hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all hover:bg-card disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <span className="font-bold text-sm">{option.id}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground mb-2 leading-tight">{option.text}</p>
                <div className="text-xs font-mono text-primary/70 mb-3 bg-primary/10 px-2 py-1 rounded">
                  {formatEffect(option.effect)}
                </div>
                <p className="text-sm text-foreground/60">{option.explanation}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
