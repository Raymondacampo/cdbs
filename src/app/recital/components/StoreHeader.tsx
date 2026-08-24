import { H1 } from "@/components/ui/Heading";

interface StoreHeaderProps {
  title: string;
  subtitle?: string;
}

export default function StoreHeader({ title, subtitle }: StoreHeaderProps) {
  return (
    <div className="bg-[#E996B4] py-20 text-center text-white">
      {/* TODO: add image from public/images/recital/ */}
      <H1 className="text-white">{title}</H1>
      {subtitle && <p className="mt-2 text-white/80">{subtitle}</p>}
    </div>
  );
}
