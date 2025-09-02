// /components/shop/IngredientsTabs.tsx

"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface IngredientsTabsProps {
  ingredients: { category: string; items: string[] }[];
}

export default function IngredientsTabs({ ingredients }: IngredientsTabsProps) {
  if (!ingredients || ingredients.length === 0) {
    return null; // don’t render if no ingredients available
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-heading mb-4">Ingredients & Results</h2>
      <Tabs defaultValue="ingredients" className="w-full">
        {/* Tab buttons */}
        <TabsList className="bg-clay/10 rounded-xl p-1">
          <TabsTrigger
            value="ingredients"
            className="data-[state=active]:bg-clay data-[state=active]:text-white rounded-lg px-3 py-1 transition"
          >
            Ingredients
          </TabsTrigger>
          <TabsTrigger
            value="results"
            className="data-[state=active]:bg-clay data-[state=active]:text-white rounded-lg px-3 py-1 transition"
          >
            Clinical Results
          </TabsTrigger>
        </TabsList>

        {/* Ingredients */}
        <TabsContent value="ingredients" className="text-soil/80 mt-4">
          {ingredients.map((section, index) => (
            <div key={index} className="mb-4">
              <p className="mb-2 font-medium">{section.category}:</p>
              <ul className="list-disc list-inside space-y-1">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </TabsContent>

        {/* Results (placeholder) */}
        <TabsContent value="results" className="text-soil/80 mt-4">
          <p className="italic text-sm">
            Coming soon: clinical test results & efficacy data.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
