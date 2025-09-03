import { Metadata } from "next";
import RitualsLanding from "@/components/rituals/RitualsLanding";

export const metadata: Metadata = {
  title: "Rituals | Paz Glow",
  description: "Discover personalized skincare rituals by concern and intention.",
};

export default function RitualsPage() {
  return <RitualsLanding />;
}
