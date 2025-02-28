import { Check } from "lucide-react"

interface CoreValue {
  title: string
  description: string
  color: string
}

interface CoreValuesProps {
  values: CoreValue[]
}

export default function CoreValues({ values }: CoreValuesProps) {
  const colorMap: Record<string, string> = {
    amber: "#EEA83B",
    terracotta: "#CA763B",
    olive: "#AEBA8A",
    forest: "#134B42",
  }

  return (
    <section className="py-20 bg-[#80917D]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#134B42] text-center mb-16">Our Core Values</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const bgColor = colorMap[value.color] || "#EEA83B"
            return (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-[${bgColor}]/20 rounded-full flex items-center justify-center mb-6`}>
                  <Check className={`h-6 w-6 text-[${bgColor}]`} />
                </div>
                <h3 className="text-xl font-bold text-[#134B42] mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

