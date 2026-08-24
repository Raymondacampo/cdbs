interface BalletCardProps {
  title: string;
  description?: string;
}

export default function BalletCard({ title, description }: BalletCardProps) {
  return (
    <div className="rounded-xl border border-[#E996B4] bg-white p-5 shadow-sm">
      {/* TODO: add thumbnail from public/images/ballet/ */}
      <h4 className="h4 mb-1">{title}</h4>
      {description && <p className="text-sm text-[#13292A]/70">{description}</p>}
    </div>
  );
}
