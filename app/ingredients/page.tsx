import { Metadata } from "next";
import IngredientGlossary from "@/components/ingredients/IngredientGlossary";

export const metadata: Metadata = {
  title: "Ingredient Glossary | Paz Glow",
  description: "Explore our A–Z skincare ingredient glossary to learn the science and benefits behind each ritual element.",
};

export default function IngredientsPage() {
  return <IngredientGlossary />;
}
