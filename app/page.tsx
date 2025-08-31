import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#3B2A25]">Paz Glow</h1>
        <p className="text-[#9B5F43]">Rituals for radiant skin</p>
        <Button className="mt-4">Begin Your Ritual</Button>
      </div>
    </main>
  );
}
