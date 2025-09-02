// /components/shop/RitualAccordion.tsx

"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface RitualAccordionProps {
  steps: string[];
}

export default function RitualAccordion({ steps }: RitualAccordionProps) {
  if (!steps || steps.length === 0) {
    return null; // don't render if no ritual steps exist
  }

  return (
    <section className="mt-8">
      <h2 className="text-xl font-heading mb-4">How to Use</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="ritual">
          <AccordionTrigger className="text-soil hover:text-gold">
            Ritual Instructions
          </AccordionTrigger>
          <AccordionContent>
            <ol className="list-decimal list-inside space-y-2 text-soil">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
