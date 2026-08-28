import { H2 } from "@/components/ui/Heading";
import Image from "next/image";
import hero from "../../../../public/images/recital/hero.png";
import ProductCard from "../ui/ProductCard";
import StoreHeader from "../components/StoreHeader";
import Link from "next/link";
import productsData from "../data/Catalogo_recital.json";

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

  // Filtrar productos donde category coincida con el parámetro de la URL (en mayúsculas)
  const filteredProducts = productsData.filter(
    (product) => product.category.toUpperCase() === section.toUpperCase()
  );

  return (
    <div>
      <div className="bg-white md:hidden text-center text-white">
        <Image
          src={hero}
          alt="Recital Store Hero"
          className="mx-auto w-dvw"
        />
      </div>
      <StoreHeader title={label} subtitle={`Browse our ${label.toLowerCase()} collection`} />
      <section className="py-16 px-4 max-w-7xl mx-auto">

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            No se encontraron productos en esta categoría.
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                name={p.name}
                price={p.price}
                imageSrc={p.imageSrc[0] ?? ""}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}