import { H2 } from "@/components/ui/Heading";
import ProductCard from "../ui/ProductCard";
import StoreHeader from "../components/StoreHeader";
import Link from "next/link";

interface SectionPageProps {
  params: Promise<{ section: string }>;
}

export async function generateMetadata({ params }: SectionPageProps) {
  const { section } = await params;
  return { title: `${section.charAt(0).toUpperCase() + section.slice(1)} — Recital Store — CDBS` };
}

export default async function RecitalSectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const label = section.charAt(0).toUpperCase() + section.slice(1);

  // Placeholder products — replace with real data
  const products = [
    { name: `${label} Item 1`, price: "$0.00" },
    { name: `${label} Item 2`, price: "$0.00" },
    { name: `${label} Item 3`, price: "$0.00" },
    { name: `${label} Item 4`, price: "$0.00" },
  ];

  return (
    <div>
      <StoreHeader title={label} subtitle={`Browse our ${label.toLowerCase()} collection`} />

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8 text-sm text-[#13292A]/60">
          <Link href="/recital" className="hover:text-[#E996B4]">Recital Store</Link>
          <span>/</span>
          <span className="text-[#13292A]">{label}</span>
        </div>

        <H2 className="mb-8">{label}</H2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.name} name={p.name} price={p.price} />
          ))}
        </div>
      </section>
    </div>
  );
}
