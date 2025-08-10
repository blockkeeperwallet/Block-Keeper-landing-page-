"use client"

import type React from "react"

import { useCallback, useMemo, useState } from "react"
import { Briefcase, Mail, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { useI18n } from "@/components/i18n-provider"

const TO_EMAIL = "blockkeper@gmail.com"

export function JobsSection() {
  const { t } = useI18n()
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [composeOpen, setComposeOpen] = useState(false)
  const [pending, setPending] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

  const subject = useMemo(() => `Job Application — ${name || "Candidate"}`, [name])
  const bodyText = useMemo(
    () =>
      [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "About / Experience:",
        about,
        "",
        "---",
        "Sent from Block Keeper Careers",
      ].join("\n"),
    [name, email, about],
  )
  const mailtoHref = useMemo(
    () => `mailto:${TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`,
    [subject, bodyText],
  )

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!name || !email || !about) {
        toast({ title: "Please fill out all fields.", variant: "destructive" })
        return
      }
      if (!isValidEmail(email)) {
        toast({ title: "Please enter a valid email address.", variant: "destructive" })
        return
      }
      setPending(true)
      // Instead of programmatic mailto navigation (blocked in previews),
      // show a compose dialog with a real anchor the user can tap.
      setTimeout(() => {
        setPending(false)
        setOpen(false)
        setComposeOpen(true)
      }, 250)
    },
    [name, email, about, toast],
  )

  return (
    <div id="jobs" className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 md:p-10">
      <div className="flex items-start gap-5">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
          <Briefcase className="h-9 w-9 text-cyan-400" aria-hidden="true" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">{t("nav.jobs")}</h2>
          <p className="text-neutral-300 max-w-2xl">Join a Team Building the Future of Web3.</p>

          {/* Apply Now -> Modal with form */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                className="inline-flex items-center rounded-lg border border-cyan-500/30 bg-neutral-900/70 px-4 py-2 text-cyan-300 transition-colors hover:bg-neutral-900/90 hover:text-cyan-200"
                aria-label="Apply now"
              >
                {"Apply now \u2192"}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg border-neutral-800 bg-neutral-950 text-neutral-100">
              <DialogHeader>
                <DialogTitle className="text-2xl">Apply to Block Keeper</DialogTitle>
                <DialogDescription>Tell us a bit about you.</DialogDescription>
              </DialogHeader>

              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Satoshi Nakamoto"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="about">About you</Label>
                  <Textarea
                    id="about"
                    name="about"
                    placeholder="Describe your role, skills, and past experience…"
                    rows={6}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-cyan-500 text-black hover:bg-cyan-400"
                    disabled={pending}
                    aria-busy={pending}
                  >
                    {pending ? "Preparing…" : "Send"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>

          {/* Compose Email Dialog: shows a real mailto anchor + copy helpers */}
          <ComposeDialog
            open={composeOpen}
            onOpenChange={setComposeOpen}
            mailtoHref={mailtoHref}
            email={TO_EMAIL}
            bodyText={bodyText}
          />
        </div>
      </div>
    </div>
  )
}

function ComposeDialog({
  open,
  onOpenChange,
  mailtoHref,
  email,
  bodyText,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  mailtoHref: string
  email: string
  bodyText: string
}) {
  const { toast } = useToast()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedBody, setCopiedBody] = useState(false)

  const copy = async (text: string, kind: "email" | "body") => {
    try {
      await navigator.clipboard.writeText(text)
      if (kind === "email") {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 1500)
      } else {
        setCopiedBody(true)
        setTimeout(() => setCopiedBody(false), 1500)
      }
      toast({ title: "Copied to clipboard" })
    } catch {
      toast({ title: "Copy failed. Long‑press to select and copy.", variant: "destructive" })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg border-neutral-800 bg-neutral-950 text-neutral-100">
        <DialogHeader>
          <DialogTitle className="text-2xl">Open your email app</DialogTitle>
          <DialogDescription>Tap the button below. If it doesn’t open, copy and paste.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <a
            href={mailtoHref}
            className="inline-flex w-full items-center justify-center rounded-lg border border-cyan-500/30 bg-neutral-900/70 px-4 py-2 text-cyan-300 transition-colors hover:bg-neutral-900/90 hover:text-cyan-200"
          >
            <Mail className="mr-2 h-4 w-4" />
            Open mail app
          </a>

          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">To</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-cyan-300 hover:text-cyan-200"
                onClick={() => copy(email, "email")}
              >
                {copiedEmail ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                {copiedEmail ? "Copied" : "Copy"}
              </Button>
            </div>
            <div className="mt-1 break-all text-sm">{email}</div>
          </div>

          <div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-neutral-400">Message</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-cyan-300 hover:text-cyan-200"
                onClick={() => copy(bodyText, "body")}
              >
                {copiedBody ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
                {copiedBody ? "Copied" : "Copy"}
              </Button>
            </div>
            <pre className="max-h-48 overflow-auto whitespace-pre-wrap break-words rounded bg-neutral-950/60 p-2 text-sm">
              {bodyText}
            </pre>
          </div>

          <div className="flex justify-end">
            <Button
              variant="outline"
              className="border-neutral-800 bg-neutral-900 text-neutral-200 hover:bg-neutral-800"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
