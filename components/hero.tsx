"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Youtube, Send } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

export function Hero() {
  const { t } = useI18n()
  return (
    <div className="grid gap-10 py-10 md:py-16 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col gap-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{t("hero.title")}</h1>
          <p className="text-lg text-neutral-300">{t("hero.subtitle")}</p>
          <p className="max-w-xl text-neutral-300">{t("hero.desc")}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button asChild className="bg-cyan-500 text-black hover:bg-cyan-400">
            <Link href="#launch">{t("hero.launch")}</Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
          >
            <Link href="#coming-soon">{t("hero.comingSoon")}</Link>
          </Button>
        </div>

        {/* Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-neutral-300">
          <SocialIcon href="https://www.youtube.com/@BlockKeeper" label="YouTube">
            <Youtube className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/Block_keeper" label="Twitter">
            <Twitter className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://t.me/block_keeper" label="Telegram">
            <Send className="h-4 w-4" />
          </SocialIcon>
          <SocialIcon href="https://github.com/blockkeeperwallet" label="GitHub">
            <Github className="h-4 w-4" />
          </SocialIcon>

          {/* Email contact (no icon) */}
          <a
            href="mailto:blockkeper@gmail.com"
            className="ml-2 text-sm text-neutral-400 underline-offset-4 hover:text-cyan-300 hover:underline"
            aria-label="Email: blockkeper@gmail.com"
            title="Email: blockkeper@gmail.com"
          >
            {"Email: blockkeper@gmail.com"}
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.5)]">
          <Image
            src="/images/seedless-banner.webp"
            width={768}
            height={768}
            alt="Block Keeper — The end of seed phrase leaks. A next-gen smart wallet."
            className="rounded-xl object-cover"
            priority
          />
        </div>
        <div className="absolute -inset-4 -z-10 rounded-3xl bg-cyan-500/10 blur-2xl" aria-hidden="true" />
      </div>
    </div>
  )
}

function SocialIcon({
  href,
  label,
  children,
  disabled = false,
}: {
  href: string
  label: string
  children: React.ReactNode
  disabled?: boolean
}) {
  const common =
    "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-200 transition-colors"
  const enabledStyles =
    "hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50"
  const disabledStyles = "opacity-50 pointer-events-none"
  if (disabled) {
    return (
      <span className={`${common} ${disabledStyles}`} aria-disabled="true" title={label}>
        {children}
      </span>
    )
  }
  const isMailto = href.startsWith("mailto:")
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      {...(!isMailto ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${common} ${enabledStyles}`}
    >
      {children}
    </a>
  )
}
