// import Image from "next/image";
interface TeamMemberProps {
  name: string;
  role: string;
  // imageSrc: string;
}
export default function TeamMember({ name, role }: TeamMemberProps) {
  return (
    <div className="rounded-xl bg-[#F2C9D8] p-6 text-center shadow-sm">
      {/* TODO: <Image src={imageSrc} alt={name} width={80} height={80} className="rounded-full mx-auto mb-3" /> */}
      <div className="w-20 h-20 rounded-full bg-[#E996B4]/40 mx-auto mb-3" />
      <h4 className="h4">{name}</h4>
      <p className="text-xs text-[#13292A]/60 mt-1">{role}</p>
    </div>
  );
}
