import HeroSection from "@/components/hero-section"
import SectionHeader from "@/components/section-header"
import ServiceCard from "@/components/service-card"
import IndustryCard from "@/components/industry-card"
import CTASection from "@/components/cta-section"
import { Lightbulb, BarChart2, Target, Zap, PieChart, TrendingUp, Leaf, BookOpen, Cog, Calendar } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive business solutions tailored to drive your success and growth."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="#services"
      />

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Comprehensive Business Solutions"
            subtitle="We offer a range of services designed to meet the evolving needs of businesses, including:"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Lightbulb className="h-6 w-6 text-[#134B42]" />}
              title="Digital Transformation"
              points={[
                "Integrating cutting-edge technology into business operations",
                "Optimizing products, services, and processes for the digital era",
              ]}
            />

            <ServiceCard
              icon={<BarChart2 className="h-6 w-6 text-[#134B42]" />}
              title="Business Diagnostics"
              points={[
                "Identifying operational inefficiencies and areas for growth",
                "Conducting in-depth business health assessments",
              ]}
            />

            <ServiceCard
              icon={<Target className="h-6 w-6 text-[#134B42]" />}
              title="Strategic & Business Planning"
              points={[
                "Developing actionable short- and long-term plans",
                "Aligning organizational goals with market opportunities",
              ]}
            />

            <ServiceCard
              icon={<Zap className="h-6 w-6 text-[#134B42]" />}
              title="Business Advisory"
              points={[
                "Tailored guidance for strategic decision-making",
                "Industry-specific insights to enhance performance",
              ]}
            />

            <ServiceCard
              icon={<PieChart className="h-6 w-6 text-[#134B42]" />}
              title="Sales & Marketing Modules"
              points={[
                "Crafting effective sales and marketing strategies",
                "Enhancing brand positioning and market reach",
              ]}
            />

            <ServiceCard
              icon={<TrendingUp className="h-6 w-6 text-[#134B42]" />}
              title="Business Growth & Implementation"
              points={[
                "Designing pathways for scaling businesses sustainably",
                "Ensuring effective execution of growth initiatives",
              ]}
            />

            <ServiceCard
              icon={<Cog className="h-6 w-6 text-[#134B42]" />}
              title="Process Management"
              points={[
                "Streamlining operations for efficiency and cost-effectiveness",
                "Implementing process improvements and automation",
              ]}
            />

            <ServiceCard
              icon={<Calendar className="h-6 w-6 text-[#134B42]" />}
              title="Event Management Services"
              points={[
                "Planning and executing corporate events with precision",
                "Providing end-to-end event coordination for impactful experiences",
              ]}
            />

            <ServiceCard
              icon={<Leaf className="h-6 w-6 text-[#134B42]" />}
              title="Sustainable Business Advisory"
              points={[
                "Aligning sustainability goals with profitability objectives",
                "Helping businesses adopt environmentally and socially responsible practices",
              ]}
            />

            <ServiceCard
              icon={<BookOpen className="h-6 w-6 text-[#134B42]" />}
              title="Training & Capacity Building"
              points={[
                "Business coaching to equip leaders with transformative insights",
                "Customized training programs on leadership, innovation, and team management",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-[#EEA83B]/10">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Industries We Serve"
            subtitle="Our expertise spans across multiple sectors, allowing us to provide tailored solutions for diverse business needs."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              title="Manufacturing"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              title="Healthcare"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Technology"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              }
              title="Retail"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              title="Financial Services"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5"
                  />
                </svg>
              }
              title="Hospitality & Tourism"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M1 5h4m7 6v4m0-11v5m0 0l-2.586-2.586a2 2 0 00-2.828 0L2 16m6-3l2 2m4-2l2 2"
                  />
                </svg>
              }
              title="Farming & Agriculture"
            />

            <IndustryCard
              icon={
                <svg
                  className="h-8 w-8 text-[#134B42]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              }
              title="Education & NGOs"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Business?"
        subtitle="Our team of experts is ready to help you overcome challenges and achieve your business goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

