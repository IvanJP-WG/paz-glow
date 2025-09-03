"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface Ingredient {
  name: string;
  description: string;
  benefit: string;
}

const ingredientList: Ingredient[] = [
  {
    name: "Aloe Vera",
    description: "A soothing plant extract rich in vitamins and polysaccharides.",
    benefit: "Calms irritation, hydrates, supports skin barrier repair.",
  },
  {
    name: "Ceramides",
    description: "Lipids that form the skin’s barrier and help retain moisture.",
    benefit: "Strengthens barrier, prevents water loss.",
  },
  {
    name: "Niacinamide",
    description: "A form of vitamin B3 with multifunctional skin benefits.",
    benefit: "Reduces redness, improves texture, supports barrier health.",
  },
  {
    name: "Vitamin C",
    description: "A potent antioxidant that supports collagen production.",
    benefit: "Brightens dullness, evens tone, reduces free radical damage.",
  },
];

export default function IngredientGlossary() {
  const [query, setQuery] = useState("");

  const filteredIngredients = ingredientList.filter((ing) =>
    ing.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading mb-4">Ingredient Glossary</h1>
        <p className="text-soil/80 max-w-2xl mx-auto">
          Learn about every ingredient in our formulations — their source,
          function, and benefits for your skin.
        </p>
      </motion.div>

      {/* Search */}
      <div className="mb-8 flex justify-center">
        <Input
          type="text"
          placeholder="Search ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Ingredient List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredIngredients.map((ing, i) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-heading text-lg mb-2">{ing.name}</h3>
                <p className="text-sm text-soil/80 mb-2">{ing.description}</p>
                <p className="text-xs font-medium text-clay">
                  Benefit: {ing.benefit}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredIngredients.length === 0 && (
        <p className="text-center text-soil/60 mt-8">
          No ingredients found matching “{query}”.
        </p>
      )}
    </div>
  );
}
