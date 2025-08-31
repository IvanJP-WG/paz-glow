import Hero from "@/components/home/Hero";
import RitualRail from "@/components/home/RitualRail";
import CollectionCards from "@/components/home/CollectionCards";
import StoryStrip from "@/components/home/StoryStrip";
import JournalPreview from "@/components/home/JournalPreview";
import EmailBar from "@/components/home/EmailBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RitualRail />
      <CollectionCards />
      <StoryStrip />
      <JournalPreview />
      <EmailBar />
    </>
  );
}
