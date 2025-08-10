"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { en } from "@/locales/en"
import { zh } from "@/locales/zh"
import { hi } from "@/locales/hi"
import { tr } from "@/locales/tr"
import { es } from "@/locales/es"
import { fr } from "@/locales/fr"

export type Locale = "en" | "zh" | "hi" | "tr" | "es" | "fr"
type Dict = typeof en

const DICTS: Record<Locale, Dict> = { en, zh, hi, tr, es, fr }

type I18nContextValue = {
  locale: Locale
  t: (key: string) => string
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

const LS_KEY = "block-keeper:locale"

function detectDefaultLocale(): Locale {
  if (typeof window === "undefined") return "en"
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith("zh")) return "zh"
  if (nav.startsWith("hi")) return "hi"
  if (nav.startsWith("tr")) return "tr"
  if (nav.startsWith("es")) return "es"
  if (nav.startsWith("fr")) return "fr"
  return "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en"
    return (localStorage.getItem(LS_KEY) as Locale) || detectDefaultLocale()
  })

  useEffect(() => {
    localStorage.setItem(LS_KEY, locale)
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])

  const t = useCallback(
    (key: string) => {
      const dict = DICTS[locale] || en
      // Support nested keys like "hero.title"
      return key.split(".").reduce<any>((acc, part) => (acc ? acc[part] : undefined), dict) ?? key
    },
    [locale],
  )

  const value = useMemo<I18nContextValue>(() => ({ locale, t, setLocale }), [locale, t, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>")
  return ctx
}
