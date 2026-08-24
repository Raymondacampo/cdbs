// import Image from "next/image";
// import heroBallet from "../../../../public/images/ballet/hero.jpg";

export default function BalletHero() {
  return (
    <div className="bg-[#E996B4] py-20 text-center text-white">
      {/* TODO: replace with <Image src={heroBallet} alt="Ballet" fill className="object-cover" /> */}
      <p className="text-4xl font-[Quicksand,sans-serif] font-bold">Ballet</p>
      <p className="mt-2 text-white/80">Grace. Discipline. Art.</p>
    </div>
  );
}
