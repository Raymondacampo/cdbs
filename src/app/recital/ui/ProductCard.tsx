import Button from "@/components/ui/Button";

interface ProductCardProps {
  name: string;
  price?: string;
  // imageSrc: string;
}

export default function ProductCard({ name, price }: ProductCardProps) {
  return (
    <div className="rounded-xl bg-white border border-[#F2C9D8] shadow-sm overflow-hidden">
      {/* TODO: <Image src={imageSrc} alt={name} width={300} height={200} className="object-cover w-full h-48" /> */}
      <div className="h-48 bg-[#F5E1DB] flex items-center justify-center text-[#13292A]/30 text-sm">
        Image Placeholder
      </div>
      <div className="p-4">
        <h4 className="h4 mb-1">{name}</h4>
        {price && <p className="text-sm text-[#13292A]/70 mb-3">{price}</p>}
        <Button fullWidth size="sm">Add to Cart</Button>
      </div>
    </div>
  );
}
