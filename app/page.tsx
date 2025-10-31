import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MissionValuesSection } from "@/components/mission-values-section"
import { BenefitsSection } from "@/components/benefits-section"
import { PartnershipLevels } from "@/components/partnership-levels"
import { JourneySection } from "@/components/journey-section"
import { CoursesSection } from "@/components/courses-section"
import { EjaSection } from "@/components/eja-section"
import { FormSection } from "@/components/form-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section - Split design with logo and CTA */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Mission, Values, Video and Stats Section */}
        <section id="sobre">
          <MissionValuesSection />
        </section>

        {/* Benefits Section - 6 cards with badges */}
        <BenefitsSection />

        {/* Partnership Levels - Staggered 3-tier cards */}
        <PartnershipLevels />

        {/* Journey Section - Timeline with scroll progress */}
        <JourneySection />

        {/* Courses Section - Technical courses by category */}
        <CoursesSection />

        {/* EJA Section - Adult education courses */}
        <EjaSection />

        {/* Form Section - Form */}
        <FormSection />

        {/* FAQ Section - Frequently asked questions */}
        <FaqSection />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}
