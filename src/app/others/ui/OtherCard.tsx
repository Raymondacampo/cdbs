interface OtherCardProps { title: string; description?: string; }
export default function OtherCard({ title, description }: OtherCardProps) {
  return (
    <div className="rounded-xl border border-[#F2C9D8] bg-white p-5 shadow-sm">
      {/* TODO: add image from public/images/others/ */}
      <h4 className="h4 mb-1">{title}</h4>
      {description && <p className="text-sm text-[#13292A]/70">{description}</p>}
    </div>
  );
}
