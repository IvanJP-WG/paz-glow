"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface RitualDetailProps {
  slug: string;
}

const rituals: Record<
  string,
  { title: string; intro: string; steps: { title: string; desc: string }[] }
> = {
  hydration: {
    title: "Hydration Ritual",
    intro: "A soothing routine to deeply replenish moisture levels.",
    steps: [
      { title: "Cleanse", desc: "Use a gentle gel cleanser to refresh without stripping." },
      { title: "Mist", desc: "Spritz hydrating mist to prep the skin barrier." },
      { title: "Serum", desc: "Apply a water-based serum rich in hyaluronic acid." },
      { title: "Moisturize", desc: "Seal hydration with a lightweight cream." },
    ],
  },
  calming: {
    title: "Calming Ritual",
    intro: "Designed to soothe skin prone to redness or irritation.",
    steps: [
      { title: "Cleanse", desc: "Choose a cream cleanser for barrier support." },
      { title: "Tone", desc: "Apply calming toner with chamomile or centella asiatica." },
      { title: "Serum", desc: "Use a calming serum with niacinamide." },
      { title: "Moisturize", desc: "Protect barrier with nourishing moisturizer." },
    ],
  },
  radiance: {
    title: "Radiance Ritual",
    intro: "Energizing steps for brighter, glowing skin.",
    steps: [
      { title: "Cleanse", desc: "Start with a foaming cleanser for freshness." },
      { title: "Exfoliate", desc: "Use a mild AHA exfoliant twice a week." },
      { title: "Serum", desc: "Apply a vitamin C serum to boost radiance." },
      { title: "Moisturize", desc: "Finish with a glow-boosting moisturizer." },
    ],
  },
};

export default function RitualDetail({ slug }: RitualDetailProps) {
  const ritual = rituals[slug];

  if (!ritual) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h1 className="text-2xl font-heading">Ritual not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-6 px-6">
      <div className="mb-6">
        <Link
            href="/rituals"
            className="inline-flex items-center text-sm text-primary hover:underline"
        >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rituals
        </Link>
      </div>
      
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <h1 className="text-4xl font-heading mb-4">{ritual.title}</h1>
        <p className="text-soil/80 max-w-2xl mx-auto">{ritual.intro}</p>
      </motion.div>

      {/* Steps Accordion */}
      <Accordion type="single" collapsible className="w-full space-y-4">
        {ritual.steps.map((step, i) => (
          <AccordionItem key={i} value={`step-${i}`}>
            <AccordionTrigger>{step.title}</AccordionTrigger>
            <AccordionContent>{step.desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
