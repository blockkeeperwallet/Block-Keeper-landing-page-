"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookText } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function FeatureCards() {
  const { t } = useI18n()
  return (
    <div id="features" className="grid gap-6 md:grid-cols-2">
      <TokenFeatureCard
        title={t("features.token.title")}
        desc={t("features.token.desc")}
        cta={t("features.token.cta")}
        href="https://block-keeper.medium.com/fz-token-powering-the-future-of-gas-fee-free-transactions-blockkeeper-b4100be36a87"
      />
      <DocsFeatureCard
        title={t("features.docs.title")}
        desc={t("features.docs.desc")}
        cta={t("features.docs.cta")}
        href="https://block-keeper.medium.com/block-keeper-your-new-web3-wallet-111d3bf0ca03"
      />
    </div>
  )
}

function TokenFeatureCard({
  title,
  desc,
  cta,
  href,
}: {
  title: string
  desc: string
  cta: string
  href: string
}) {
  return (
    <Card
      id="token"
      className="group relative overflow-hidden border-neutral-900 bg-neutral-950/60 transition-colors hover:border-neutral-800"
    >
      {/* Background coin stays subtle for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_%D9%A2%D9%A0%D9%A2%D9%A5%D9%A0%D9%A8%D9%A1%D9%A1_%D9%A0%D9%A1%D9%A2%D9%A1%D9%A1%D9%A0.jpg-mR08x5kJfMt8QzEZjRCdwUNI0P106S.jpeg"
          alt="FZ network artwork background"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center opacity-20 scale-110 transition-transform duration-500 ease-out"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
      </div>

      <div className="relative grid min-h-[26rem] place-items-center p-6 md:min-h-[28rem] md:p-10">
        <div className="max-w-md">
          {/* New foreground FZ image placed above text */}
          <div className="mb-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_%D9%A2%D9%A0%D9%A2%D9%A5%D9%A0%D9%A8%D9%A1%D9%A1_%D9%A0%D9%A1%D9%A2%D9%A1%D9%A1%D9%A0.jpg-mR08x5kJfMt8QzEZjRCdwUNI0P106S.jpeg"
              alt="FZ token — neon network connection art"
              width={768}
              height={768}
              className="w-40 sm:w-48 md:w-56 h-auto rounded-lg border border-neutral-800 shadow-lg"
              priority={false}
            />
          </div>

          <div className="mb-2 text-xs uppercase tracking-[0.15em] text-cyan-400/90">FEEZ</div>
          <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-neutral-300">{desc}</p>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center rounded-lg border border-cyan-500/30 bg-neutral-900/70 px-4 py-2 text-cyan-300 transition-colors hover:bg-neutral-900/90 hover:text-cyan-200"
            aria-label={title}
            title={title}
          >
            {cta} {"\u2192"}
          </Link>
        </div>
      </div>
    </Card>
  )
}

function DocsFeatureCard({
  title,
  desc,
  cta,
  href,
}: {
  title: string
  desc: string
  cta: string
  href: string
}) {
  return (
    <Card id="docs" className="border-neutral-900 bg-neutral-950/60 transition-colors hover:border-neutral-800">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-neutral-900">
            <BookText className="h-6 w-6 text-cyan-400" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="text-neutral-300">
        <p className="mb-4">{desc}</p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center rounded-lg border border-cyan-500/30 bg-neutral-900/70 px-4 py-2 text-cyan-300 transition-colors hover:bg-neutral-900/90 hover:text-cyan-200"
          aria-label={`Visit ${title}`}
          title={title}
        >
          {cta} {"\u2192"}
        </Link>
      </CardContent>
    </Card>
  )
}
