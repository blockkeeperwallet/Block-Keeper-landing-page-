"use client"

import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"

export function WhatIsSection() {
  const { t } = useI18n()
  return (
    <section className="container mx-auto px-4 sm:px-6 py-8 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("what.title")}</h2>
          <p className="text-neutral-300">{t("what.p1")}</p>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">{t("what.h3")}</h3>
            <p className="text-neutral-300">{t("what.p2")}</p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-2">
            <Image
              src="/images/bottom-cta-banner.png"
              width={1365}
              height={768}
              alt="Block Keeper banner showing a metallic key and shield on a circuit board with the headline 'A New Generation of Decentralized Wallets'."
              className="rounded-xl object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 rounded-3xl bg-cyan-500/10 blur-2xl" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
