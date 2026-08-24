import { H1, H3 } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export const metadata = { title: "Hip-Hop & Jazz — CDBS" };

export default function HiphopJazzPage() {
  return (
    <div>
      <div className="bg-[#13292A] text-white py-20 text-center">
        {/* TODO: add hero image from public/images/hiphop-jazz/ */}
        <p className="text-4xl font-[family-name:var(--font-quicksand)] font-bold">Hip-Hop & Jazz</p>
        <p className="mt-2 text-white/70">Energy. Rhythm. Expression.</p>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <H1 className="mb-6">Hip-Hop & Jazz Classes</H1>
        <p className="text-[#13292A]/80 mb-8 max-w-2xl">
          {/* TODO: add description */}
          Feel the rhythm and unleash your style. Placeholder content.
        </p>
        <Button>Enroll Now</Button>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Hip-Hop", "Jazz", "Jazz Funk"].map((style) => (
          <div key={style} className="rounded-xl bg-[#F5E1DB] p-6 shadow-sm">
            {/* TODO: add style image from public/images/hiphop-jazz/ */}
            <H3 className="mb-2">{style}</H3>
            <p className="text-sm text-[#13292A]/70">Style description placeholder.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
