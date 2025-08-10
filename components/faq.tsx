"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="mb-6 md:mb-8">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold">
          Frequently Asked Questions (FAQ)
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-300">
          Answers to common questions about Block Keeper, security, recovery, and the FZ token.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>1. What is Block Keeper&apos;s core security model?</AccordionTrigger>
          <AccordionContent>
            {
              "Block Keeper uses a unique dual-layer security model. Your wallet is protected by both a strong password and a 12-word seed phrase. Unlike traditional wallets, an attacker cannot transfer your funds without both of these elements."
            }
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>2. How does the password protect my wallet?</AccordionTrigger>
          <AccordionContent>
            {
              "Your password is never stored on a server or in a smart contract. It is used locally on your device to extract your wallet data and is required to verify and sign every transaction. This ensures that even if your seed phrase is compromised, your funds remain secure."
            }
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>3. What happens if I lose my password or seed phrase?</AccordionTrigger>
          <AccordionContent>
            {
              "Losing either your password or your seed phrase will prevent you from accessing or recovering your wallet. This is an intentional design choice to ensure that we never have access to your funds. Therefore, you must save both elements separately and securely."
            }
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q4">
          <AccordionTrigger>4. How do &quot;gas-free&quot; transactions work with the FZ token?</AccordionTrigger>
          <AccordionContent>
            {
              "Block Keeper's unique Relayer service handles the gas fee payments for you. You pay a small fee using our native token, $FZ, and the Relayer pays the gas in ETH or the native token of the blockchain. You never need to own ETH to make a transaction."
            }
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q5">
          <AccordionTrigger>5. How is my wallet recovered?</AccordionTrigger>
          <AccordionContent>
            {
              "To recover your wallet, you must enter both your 12-word seed phrase and the correct password. The wallet app will then ask you to confirm a few randomly selected words from your phrase to complete the recovery."
            }
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="q6">
          <AccordionTrigger>6. What is the FZ token used for?</AccordionTrigger>
          <AccordionContent>
            <p>
              {
                "The FZ token is a utility token used to cover gas fees on all supported chains. You can earn FZ tokens through:"
              }
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Community tasks</li>
              <li>Inviting friends</li>
              <li>Claiming from our faucet</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
