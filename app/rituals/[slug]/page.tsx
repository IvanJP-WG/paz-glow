import { Metadata } from "next";
import RitualDetail from "@/components/rituals/RitualDetail";

interface RitualPageProps {
  params: { slug: string };
}

// ✅ Example metadata generator per ritual
export async function generateMetadata({
  params,
}: RitualPageProps): Promise<Metadata> {
  const ritualTitles: Record<string, string> = {
    hydration: "Hydration Ritual | Paz Glow",
    calming: "Calming Ritual | Paz Glow",
    radiance: "Radiance Ritual | Paz Glow",
  };

  return {
    title: ritualTitles[params.slug] || "Ritual | Paz Glow",
    description: "Discover step-by-step skincare rituals tailored to your needs.",
  };
}

export default function RitualPage({ params }: RitualPageProps) {
  return <RitualDetail slug={params.slug} />;
}
