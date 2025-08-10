"use client"

import { Lightbulb, Sparkles, Users, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function AboutUsSection() {
  return (
    <section id="about" className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6 md:p-10">
        <div className="flex items-start gap-5">
          {/* Left icon block to match Jobs/Roadmap sections */}
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-neutral-900 ring-1 ring-neutral-800">
            <Info className="h-9 w-9 text-cyan-400" aria-hidden="true" />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">About Block Keeper</h2>
            <p className="text-neutral-300 max-w-3xl">
              Vision, Belief, and a Community‑first approach powering a secure, seamless Web3 experience.
            </p>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="inline-flex items-center rounded-lg border border-cyan-500/30 bg-neutral-900/70 px-4 py-2 text-cyan-300 transition-colors hover:bg-neutral-900/90 hover:text-cyan-200"
                  aria-label="Learn more about Block Keeper"
                  title="Learn more about Block Keeper"
                >
                  {"Learn more \u2192"}
                </Button>
              </DialogTrigger>

              {/* Wide, scrollable dialog so the full text is always visible */}
              <DialogContent className="max-w-3xl sm:max-w-4xl md:max-w-5xl max-h-[85vh] overflow-y-auto border-neutral-800 bg-neutral-950 text-neutral-100">
                <DialogHeader>
                  <DialogTitle className="text-2xl">About Block Keeper</DialogTitle>
                  <DialogDescription className="text-neutral-400">
                    Our Vision, Belief, and Community‑first principles.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 p-1 md:p-2">
                  {/* Vision */}
                  <section className="flex items-start gap-3">
                    <Lightbulb className="mt-1 h-6 w-6 text-cyan-400" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-medium">💡 Vision</h3>
                      <p className="mt-2 text-neutral-300">
                        Block Keeper envisions a future where decentralized technology facilitates interaction with
                        digital assets, enabling users and developers to manage their assets in a highly secure and
                        seamless manner. By combining our unique security innovations with a unified gas fee system, we
                        aim to simplify the trading and transfer process, making it faster, safer, and more accessible.
                        Block Keeper aspires to be the leading force behind a Web3 wallet that combines absolute
                        security with an intuitive user experience, inspiring users to explore what&apos;s possible in a
                        decentralized world.
                      </p>
                    </div>
                  </section>

                  {/* Belief */}
                  <section className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-6 w-6 text-cyan-400" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-medium">🙏 Belief</h3>
                      <p className="mt-2 text-neutral-300">
                        We believe that the future of finance lies not in complex systems, but in intelligent solutions
                        that simplify workflows and unlock new levels of financial freedom. Our commitment is to provide
                        tools that remove technical barriers, allowing users to focus on their vision and goals. Through
                        our innovative security, we democratize digital asset ownership, ensuring that everyone—whether
                        an individual investor or a global team—has the power to protect their ideas and their money. We
                        believe Web3 is a fundamental shift that will redefine the relationship with money for
                        generations to come.
                      </p>
                    </div>
                  </section>

                  {/* Community First */}
                  <section className="flex items-start gap-3">
                    <Users className="mt-1 h-6 w-6 text-cyan-400" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-medium">👥 Community First</h3>
                      <p className="mt-2 text-neutral-300">
                        The BlockKeeper community is the backbone of our mission, uniting Web3 users and developers in a
                        shared vision to reshape the future of security in Web3. We recognize the valuable role of our
                        users and contributors, who support the growth and success of the BlockKeeper ecosystem.
                        Together, we are building a robust ecosystem where every participant has a stake in the
                        evolution of secure and dynamic digital environments.
                      </p>
                      <p className="mt-4 text-neutral-300">To learn more you can stay follow us</p>
                    </div>
                  </section>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  )
}
