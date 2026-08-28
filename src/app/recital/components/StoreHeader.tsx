import { H1 } from "@/components/ui/Heading";

interface StoreHeaderProps {
  title: string;
  subtitle?: string;
}

export default function StoreHeader({ title, subtitle }: StoreHeaderProps) {
  return (
    <div className="bg-dark py-8 text-center text-white">
      <H1 className="text-white">{title.toUpperCase()}</H1>
    </div>
  );
}
