interface MissionBlockProps { title: string; body: string; }
export default function MissionBlock({ title, body }: MissionBlockProps) {
  return (
    <div className="bg-[#F5E1DB] rounded-xl p-6">
      <h3 className="h3 mb-2">{title}</h3>
      <p className="text-sm text-[#13292A]/80">{body}</p>
    </div>
  );
}
