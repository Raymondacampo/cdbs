import { H1, H3 } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import BalletHero from "./components/BalletHero";

export const metadata = { title: "Ballet — CDBS" };

export default function BalletPage() {
  return (
    <div>
      <BalletHero />
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <H1 className="mb-6">Ballet Classes</H1>
        <p className="text-[#13292A]/80 mb-8 max-w-2xl">
          {/* TODO: add description */}
          Discover the grace and discipline of ballet. Placeholder content.
        </p>
        <Button>Enroll Now</Button>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Beginner", "Intermediate", "Advanced"].map((level) => (
          <div key={level} className="rounded-xl bg-[#F2C9D8] p-6 shadow-sm">
            {/* TODO: add level image from public/images/ballet/ */}
            <H3 className="mb-2">{level}</H3>
            <p className="text-sm text-[#13292A]/70">Level description placeholder.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
