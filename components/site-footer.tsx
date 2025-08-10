"use client"

import { useI18n } from "@/components/i18n-provider"

export function SiteFooter() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-neutral-900/70">
      <div className="container mx-auto px-4 sm:px-6 py-8 text-center text-sm text-neutral-400">
        {"\u00A9"} {new Date().getFullYear()} Block Keeper — {t("footer.made")}
      </div>
    </footer>
  )
}
