import Button from "@/components/ui/Button";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price?: string;
  imageSrc: string;
}

export default function ProductCard({ name, price, imageSrc }: ProductCardProps) {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden shadow-md rounded-lg">
      <Image src={imageSrc} alt={name} width={220} height={300} className="w-full " />
      <div className="px-2 mt-4">
        <h4 className="text-sm md:text-base lg:text-lg font-bold mb-1">{name}</h4>
        {price && <p className="text-sm lg:text-base text-dark/70 mb-3">RD${price}</p>}
      </div>
    </div>
  );
}
