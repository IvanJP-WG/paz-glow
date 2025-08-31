"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EmailBar() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 🔮 Future integration: Mailchimp / Resend / Supabase
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <section className="bg-muted py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-heading mb-4">
          Join the Ritual
        </h2>
        <p className="text-muted-foreground mb-8">
          Be the first to discover new rituals, launches, and journal stories.  
          Sign up for our glow-letter ✨
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="sm:w-72"
          />
          <Button type="submit" className="px-8 bg-clay text-white hover:bg-gold hover:text-white transition-colors">
            Subscribe
          </Button>
        </form>
      </motion.div>
    </section>
  );
}

