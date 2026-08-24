import { H1, H3 } from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export const metadata = { title: "Others — CDBS" };

export default function OthersPage() {
  return (
    <div>
      <div className="bg-[#F2C9D8] py-20 text-center">
        {/* TODO: add hero image from public/images/others/ */}
        <H1>Other Classes</H1>
        <p className="mt-2 text-[#13292A]/70">Explore more styles.</p>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <H1 className="mb-6">Other Dance Styles</H1>
        <p className="text-[#13292A]/80 mb-8 max-w-2xl">
          {/* TODO: add description */}
          From contemporary to tap, we offer a variety of dance styles. Placeholder content.
        </p>
        <Button>Enroll Now</Button>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Contemporary", "Tap", "Acro"].map((style) => (
          <div key={style} className="rounded-xl bg-[#F5E1DB] p-6 shadow-sm">
            {/* TODO: add image from public/images/others/ */}
            <H3 className="mb-2">{style}</H3>
            <p className="text-sm text-[#13292A]/70">Style description placeholder.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
