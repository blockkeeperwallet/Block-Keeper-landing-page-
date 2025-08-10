"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useI18n, type Locale } from "@/components/i18n-provider"

const LANGS: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "Chinese", short: "中文" },
  { code: "hi", label: "Hindi (India)", short: "हिन्दी" },
  { code: "tr", label: "Turkish", short: "TR" },
  { code: "es", label: "Español", short: "ES" },
  { code: "fr", label: "Français", short: "FR" },
]

export function SiteHeader() {
  const { t, locale, setLocale } = useI18n()
  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-900/70 bg-neutral-950/80 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image
            src="/images/block-keeper-logo.png"
            alt="Block Keeper logo"
            width={24}
            height={24}
            className="rounded-full"
            priority
          />
          <span className="text-sm sm:text-base">{t("brand")}</span>
          <span className="sr-only">Go to homepage</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <Link href="#about" className="hover:text-white transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="#docs" className="hover:text-white transition-colors">
            {t("nav.docs")}
          </Link>
          <Link href="#token" className="hover:text-white transition-colors">
            {t("nav.token")}
          </Link>
          <Link href="#jobs" className="hover:text-white transition-colors">
            {t("nav.jobs")}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9 gap-2 px-3 text-neutral-200">
                <span role="img" aria-label="globe">
                  🌐
                </span>
                <span className="hidden sm:inline">{current.short}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-40">
              {LANGS.map((l) => (
                <DropdownMenuItem key={l.code} onClick={() => setLocale(l.code)}>
                  {l.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="h-9 bg-cyan-500 text-black hover:bg-cyan-400">
            <Link href="#launch" aria-label={t("hero.launch")}>
              {t("hero.launch")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
