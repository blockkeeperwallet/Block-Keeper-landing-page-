"use client"

import { Flag, Rocket, Layers, Users, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function RoadmapSection() {
  return (
    <section id="roadmap" className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 md:p-10">
        <div className="flex items-start gap-5">
          {/* Left icon block to mirror About Us / Jobs style */}
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
            <Flag className="h-9 w-9 text-cyan-400" aria-hidden="true" />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Roadmap</h2>
            <p className="text-neutral-300 max-w-3xl">
              Our journey is split into four phases as we evolve Block Keeper from foundation to full decentralization.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="inline-flex items-center rounded-lg border border-cyan-500/30 bg-neutral-900/70 px-4 py-2 text-cyan-300 transition-colors hover:bg-neutral-900/90 hover:text-cyan-200"
                  aria-label="View the full roadmap"
                  title="View the full roadmap"
                >
                  {"Learn more \u2192"}
                </Button>
              </DialogTrigger>

              {/* Wide, scrollable dialog for long content */}
              <DialogContent className="max-w-3xl sm:max-w-4xl md:max-w-5xl max-h-[85vh] overflow-y-auto border-neutral-800 bg-neutral-950 text-neutral-100">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Roadmap</DialogTitle>
                  <DialogDescription className="text-neutral-400">
                    Four phases from foundation to decentralization and community governance.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 p-1 md:p-2">
                  {/* Phase 1 */}
                  <section className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Rocket className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                      <h3 className="text-lg font-medium">Phase 1</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-300">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {"Q4 2025"}
                      </span>
                    </div>
                    <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                      <li>Official Website Launch</li>
                      <li>Foundation and Security (Q4 2025)</li>
                      <li>Core Wallet Engine Completion</li>
                      <li>Launching an Airdrop Campaign to Attract Early Adopters</li>
                      <li>Deploying the App on the Testnet</li>
                      <li>Professional Security Audit of Smart Contracts and Codebase</li>
                    </ul>
                  </section>

                  {/* Phase 2 */}
                  <section className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Layers className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                      <h3 className="text-lg font-medium">Phase 2: Initial Public Launch of the ICO</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-300">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {"Q1 2026"}
                      </span>
                    </div>
                    <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                      <li>Launching the BlockKeeper Mainnet</li>
                      <li>Reaching 500,000 System Users</li>
                      <li>Launching the Mobile App (iOS and Android)</li>
                      <li>Integrating EVM-compatible Mainnets (Ethereum, BNB Chain)</li>
                    </ul>
                  </section>

                  {/* Phase 3 */}
                  <section className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                      <h3 className="text-lg font-medium">Phase 3: Ecosystem Expansion</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-300">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {"Q2\u2013Q3 2026"}
                      </span>
                    </div>
                    <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                      <li>Partnerships with DeFi Protocols and Exchanges</li>
                      <li>TGE (Token Generation Event)</li>
                      <li>Launch of staking and lockup reward programs</li>
                      <li>Integration with non-EVM chains (e.g., Bitcoin, Solana)</li>
                      <li>Integration of decentralized file and media sending and receiving capabilities</li>
                    </ul>
                  </section>

                  {/* Phase 4 */}
                  <section className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Flag className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                      <h3 className="text-lg font-medium">Phase 4: Decentralization and Governance</h3>
                      <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-xs text-neutral-300">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {"Q4 2026 and beyond"}
                      </span>
                    </div>
                    <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                      <li>Reaching 1 Million Ecosystem Users</li>
                      <li>Establishing a Decentralized Autonomous Organization (DAO)</li>
                      <li>Enabling governance proposals for Free Zone (FZ) token holders</li>
                      <li>Full decentralization of the Relayer Network</li>
                      <li>Continuous development of new features and community innovations</li>
                    </ul>
                  </section>

                  <p className="pt-2 text-neutral-300">
                    BlockKeeper is more than just a wallet; it’s a new Web3 experience. By combining security innovation
                    with the practicality of standardized gas fees, we’re building a secure, reliable, and easy‑to‑use
                    platform that aims to enrich the user experience in the decentralized world.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
