interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({ title, subtitle, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto mb-16 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-[#134B42] mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-700">{subtitle}</p>}
    </div>
  )
}

