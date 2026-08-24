interface SectionBannerProps { title: string; }
export default function SectionBanner({ title }: SectionBannerProps) {
  return (
    <div className="bg-[#F2C9D8] rounded-xl p-6 mb-8 text-center">
      {/* TODO: add banner image from public/images/recital/ */}
      <h2 className="h2">{title}</h2>
    </div>
  );
}
