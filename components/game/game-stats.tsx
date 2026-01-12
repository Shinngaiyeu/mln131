import type { Stats } from "@/app/game/page"

interface GameStatsProps {
  stats: Stats
}

const statConfig = {
  economy: {
    label: "Kinh Tế",
    color: "bg-emerald-500",
    icon: "💰",
  },
  society: {
    label: "Xã Hội",
    color: "bg-blue-500",
    icon: "🤝",
  },
  knowledge: {
    label: "Tri Thức",
    color: "bg-purple-500",
    icon: "🧠",
  },
}

export default function GameStats({ stats }: GameStatsProps) {
  return (
    <div className="sticky top-20 z-40 bg-card border-b border-border/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-3 gap-4">
          {(Object.keys(stats) as Array<keyof Stats>).map((stat) => {
            const config = statConfig[stat]
            const value = stats[stat]
            const isWarning = value < 15
            const isCritical = value <= 5

            return (
              <div key={stat} className="bg-background rounded-lg p-3 border border-border/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">{config.label}</span>
                  <span
                    className={`text-lg font-bold ${
                      isCritical ? "text-red-500" : isWarning ? "text-yellow-500" : "text-foreground"
                    }`}
                  >
                    {value}/50
                  </span>
                </div>
                <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-border/30">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isCritical ? "bg-red-500" : isWarning ? "bg-yellow-500" : config.color
                    }`}
                    style={{ width: `${(value / 50) * 100}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
