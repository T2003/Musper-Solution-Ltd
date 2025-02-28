import type React from "react"
import { AnimatedElement, HoverScaleElement } from "@/components/ui/animation"

interface IndustryCardProps {
  icon: React.ReactNode
  title: string
  delay?: number
}

export default function IndustryCard({ icon, title, delay = 0 }: IndustryCardProps) {
  return (
    <AnimatedElement animation="scale" delay={delay} className="h-full">
      <HoverScaleElement className="h-full">
        <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow h-full">
          <div className="w-16 h-16 bg-[#134B42]/10 rounded-full flex items-center justify-center mx-auto mb-4">{icon}</div>
          <h3 className="font-bold text-[#134B42]">{title}</h3>
        </div>
      </HoverScaleElement>
    </AnimatedElement>
  )
}

