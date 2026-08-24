interface StyleCardProps {
  title: string;
  description?: string;
}
export default function StyleCard({ title, description }: StyleCardProps) {
  return (
    <div className="rounded-xl border border-[#E996B4] bg-white p-5 shadow-sm">
      {/* TODO: add image from public/images/hiphop-jazz/ */}
      <h4 className="h4 mb-1">{title}</h4>
      {description && <p className="text-sm text-[#13292A]/70">{description}</p>}
    </div>
  );
}
