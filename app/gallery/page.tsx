"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      id: 1,
      title: "Karl Marx - Người sáng lập lý luận CNXH khoa học",
      category: "Lịch sử",
      src: "/karl-marx-portrait-historical-figure.jpg",
    },
    {
      id: 2,
      title: "Công nghiệp - Nền tảng của lịch sử phát triển",
      category: "Kinh tế",
      src: "/industrial-revolution-factory-workers.jpg",
    },
    {
      id: 3,
      title: "Cuộc tranh đấu của giai cấp công nhân",
      category: "Xã hội",
      src: "/workers-labor-movement-demonstration.jpg",
    },
    {
      id: 4,
      title: "Phát triển công nghiệp hiện đại",
      category: "Công nghệ",
      src: "/modern-industrial-technology-development.jpg",
    },
    {
      id: 5,
      title: "Tiến bộ giáo dục và tri thức",
      category: "Giáo dục",
      src: "/education-learning-knowledge-advancement.jpg",
    },
    {
      id: 6,
      title: "Xây dựng nền tảng xã hội mới",
      category: "Xã hội",
      src: "/community-building-social-construction.jpg",
    },
    {
      id: 7,
      title: "Phát triển bền vững và công bằng",
      category: "Kinh tế",
      src: "/sustainable-development-equality.jpg",
    },
    {
      id: 8,
      title: "Tương lai của nhân loại",
      category: "Lịch sử",
      src: "/future-humanity-collaboration-peace.jpg",
    },
  ]

  const categories = ["Tất cả", ...new Set(images.map((img) => img.category))]
  const [activeCategory, setActiveCategory] = useState("Tất cả")

  const filtered = activeCategory === "Tất cả" ? images : images.filter((img) => img.category === activeCategory)

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-card/30 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-foreground mb-4">Thư Viện Hình Ảnh</h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            Khám phá bộ sưu tập hình ảnh về lịch sử, kinh tế, xã hội và sự phát triển của chủ nghĩa xã hội
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-background border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/30 text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((image, idx) => (
              <div key={image.id} onClick={() => setSelectedImage(idx)} className="group cursor-pointer">
                <div className="relative h-64 rounded-lg overflow-hidden bg-card border border-border/30 group-hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm text-primary font-medium mb-1">{image.category}</p>
                      <p className="text-sm text-foreground font-semibold line-clamp-2">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && filtered[selectedImage] && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-card border border-border/30 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              ✕
            </button>
            <img
              src={filtered[selectedImage].src || "/placeholder.svg"}
              alt={filtered[selectedImage].title}
              className="w-full h-96 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-primary font-medium mb-2">{filtered[selectedImage].category}</p>
              <h2 className="text-2xl font-bold text-foreground mb-3">{filtered[selectedImage].title}</h2>
              <p className="text-foreground/70">
                Ảnh minh họa cho chủ đề: {filtered[selectedImage].category} trong lịch sử phát triển của xã hội loài
                người
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
