import { H1, H2 } from "@/components/ui/Heading";
import Link from "next/link";

export const metadata = { title: "Recital Store — CDBS" };

const sections = [
  { slug: "shoes",      label: "Shoes" },
  { slug: "costumes",   label: "Costumes" },
  { slug: "accessories",label: "Accessories" },
  { slug: "apparel",    label: "Apparel" },
];

export default function RecitalPage() {
  return (
    <div>
      <div className="bg-[#E996B4] py-20 text-center text-white">
        {/* TODO: add hero image from public/images/recital/ */}
        <H1 className="text-white">Recital Store</H1>
        <p className="mt-2 text-white/80">Everything you need for performance day.</p>
      </div>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <H2 className="mb-8 text-center">Shop by Category</H2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map(({ slug, label }) => (
            <Link
              key={slug}
              href={`/recital/${slug}`}
              className="rounded-xl bg-[#F5E1DB] p-8 text-center shadow-sm hover:shadow-md hover:bg-[#F2C9D8] transition-all"
            >
              {/* TODO: add category image from public/images/recital/ */}
              <h3 className="h3">{label}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
