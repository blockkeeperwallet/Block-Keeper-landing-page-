import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeatureCards } from "@/components/feature-cards"
import { SiteFooter } from "@/components/site-footer"
import { I18nProvider } from "@/components/i18n-provider"
import { WhatIsSection } from "@/components/what-is"
import { JobsSection } from "@/components/jobs"
import { FAQSection } from "@/components/faq"
import { AboutUsSection } from "@/components/about-us"
import { RoadmapSection } from "@/components/roadmap"

const title = "Block Keeper — Your New Web3 Wallet"
const description =
  "Secure. Smart. Decentralized. Protect your crypto with multi-layer security and password-only recovery."

export const metadata: Metadata = {
  title,
  description,
  // File-based OG/Twitter images are provided in app/ per Next.js conventions.
  // These entries ensure rich previews across platforms. [^1]
  openGraph: {
    type: "website",
    title,
    description,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1365,
        height: 768,
        alt: "Block Keeper — A new generation of decentralized wallets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image.png"],
  },
  // Provide icons without adding extra files; we reuse the logo in /public/images.
  icons: {
    icon: "/images/block-keeper-logo.png",
    shortcut: "/images/block-keeper-logo.png",
    apple: "/images/block-keeper-logo.png",
  },
}

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-neutral-100">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <I18nProvider>
        <SiteHeader />
        <main>
          <section className="container mx-auto px-4 sm:px-6">
            <Hero />
          </section>

          <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
            <FeatureCards />
          </section>

          <AboutUsSection />
          <RoadmapSection />

          <section className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
            <JobsSection />
          </section>

          <WhatIsSection />
          <FAQSection />
        </main>
        <SiteFooter />
      </I18nProvider>
    </div>
  )
}
